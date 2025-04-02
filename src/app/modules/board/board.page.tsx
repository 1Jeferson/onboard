import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { DndContext, DragEndEvent, DragStartEvent, DragOverlay } from '@dnd-kit/core';
import { useBoard } from '@/app/domain/boards/board.use-case';
import { Card, CardColumns } from '@/app/data/graphql/generated';
import { Text } from '@/atomic/atm.typography';
import { arrayMove } from '@dnd-kit/sortable';
import { Column } from '@/atomic/atm.column';
import { CardKanban } from '@/atomic/atm.card-kanban';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import { useUpdateCard } from '@/app/domain/cards/update-card-use-case';
import { useUpdateCardOrder } from '@/app/domain/cards/update-card-order.use-case';
import { toast } from 'sonner';
import { cardKanbanStrings } from '@/atomic/atm.card-kanban/card-kanban.strings';

const columns = [CardColumns.ToDo, CardColumns.InProgress, CardColumns.InReview, CardColumns.Done];

const BoardPage = () => {
  const { boardId } = useParams<{ boardId: string }>();
  const { data } = useBoard({ variables: { boardId: boardId || '' } });

  const [cardList, setCardList] = useState<Card[]>(data?.board.cards || []);
  const [draggedCard, setDraggedCard] = useState<Card | null>(null);

  const { updateCard } = useUpdateCard({
    onError: () => {
      toast.error(cardKanbanStrings.updateError);
    },
  });

  const { updateCardOrder } = useUpdateCardOrder({
    onError() {
      toast.error(cardKanbanStrings.updateOrderError);
    },
  });

  useEffect(() => {
    setCardList(data?.board.cards || []);
  }, [data]);

  const onDragStart = ({ active }: DragStartEvent) => {
    const selectedCard = cardList.find((card) => card.id === active.id) as Card;
    setDraggedCard(selectedCard);
  };

  const onDragEnd = ({ active, over }: DragEndEvent) => {
    if (!over || !draggedCard) return;

    const targetColumn = over.data.current?.column || (over.id as CardColumns);

    const cardBeingMoved = cardList.find((card) => card.id === active.id);
    if (!cardBeingMoved) return;

    if (cardBeingMoved.column === targetColumn) {
      const currentColumnCards = cardList.filter((card) => card.column === targetColumn);
      const currentIndex = currentColumnCards.findIndex((card) => card.id === draggedCard.id);
      const targetIndex = currentColumnCards.findIndex((card) => card.id === over.id);

      if (currentIndex !== targetIndex) {
        const reorderedColumnCards = arrayMove(currentColumnCards, currentIndex, targetIndex);
        const updatedCards = [...cardList.filter((card) => card.column !== targetColumn), ...reorderedColumnCards];
        setCardList(updatedCards);

        const cardsToUpdate = reorderedColumnCards.map((card, index) => ({
          id: card.id,
          order: index + 1,
        }));

        updateCardOrder({ data: cardsToUpdate });
      }
    } else {
      const updatedCard = { ...draggedCard, column: targetColumn };
      const remainingCards = cardList.filter((card) => card.id !== draggedCard.id);
      setCardList([updatedCard, ...remainingCards]);

      updateCard({
        data: {
          name: draggedCard.name,
          id: draggedCard.id,
          column: targetColumn,
        },
      });

      updateCardOrder({ data: [{ id: updatedCard.id, order: 1 }] });
    }

    setDraggedCard(null);
  };

  return (
    <div className='w-full max-w-2xlarge p-3x-small custom-scrollbar'>
      <Text variant='h1'>{data?.board.name}</Text>
      <DndContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
        <SortableContext strategy={verticalListSortingStrategy} items={cardList.map((card) => card.id)}>
          <div className='flex gap-x-x-small overflow-x-auto'>
            {columns.map((column) => (
              <Column key={column} column={column} cards={cardList.filter((card) => card.column === column)} />
            ))}
          </div>
        </SortableContext>
        <DragOverlay>{draggedCard ? <CardKanban card={draggedCard} /> : null}</DragOverlay>
      </DndContext>
    </div>
  );
};

export default BoardPage;
