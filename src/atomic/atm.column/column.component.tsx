import { useState } from 'react';
import { Card, CardColumns } from '@/app/data/graphql/generated';
import { Text } from '../atm.typography';
import { cardColumnsPT, columnStrings } from './column.strings';
import { columnStyle } from './column.style';
import { useDroppable } from '@dnd-kit/core';
import { CardKanban } from '../atm.card-kanban';
import { Button } from '../atm.button';
import { Add } from '../assets/icons';
import { CreateCard } from '../atm.create-card';
import { useListCards } from '@/app/domain/cards/list-cards.use-case';
import { CardSkeleton } from '../atm.card-skeleton';

interface ColumnsProps {
  column: CardColumns;
  cards: Card[];
  boardId: string;
  refetch: () => void;
}

const Column = ({ column, cards = [], boardId, refetch }: ColumnsProps) => {
  const { setNodeRef } = useDroppable({ id: column });

  const { loading } = useListCards({ variables: { boardId, column } });

  const [isCreateCardOpen, setIsCreateCardOpen] = useState(false);

  return (
    <div className='flex flex-col justify-between p-small bg-gray-white rounded-large min-w-[350px] h-[80vh]'>
      <div className='flex justify-between items-center pb-2x-small'>
        <Text variant='b1' className={columnStyle({ status: column })}>
          {cardColumnsPT[column]}
        </Text>
      </div>

      <div
        ref={setNodeRef}
        className='bg-gray-light w-full h-full p-small rounded-small flex flex-col gap-small overflow-y-auto custom-scrollbar'
      >
        {loading
          ? Array.from({ length: 3 }).map((_, i) => <CardSkeleton key={i} />)
          : cards.map((card) => <CardKanban key={card.id} card={card} column={column} refetch={refetch} />)}
      </div>

      <div>
        <Button variant='link' onClick={() => setIsCreateCardOpen(true)}>
          <Add />
          {columnStrings.addCard}
        </Button>
      </div>

      <CreateCard
        cards={cards}
        isOpen={isCreateCardOpen}
        onClose={() => setIsCreateCardOpen(false)}
        onCreate={() => {
          refetch();
          setIsCreateCardOpen(false);
        }}
        boardId={boardId}
        column={column}
      />
    </div>
  );
};

export default Column;
