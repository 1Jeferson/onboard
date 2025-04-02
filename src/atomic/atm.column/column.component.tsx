import { Card, CardColumns } from '@/app/data/graphql/generated';
import { Text } from '../atm.typography';
import { cardColumnsPT, columnStrings } from './column.strings';
import { LinkButton } from '../atm.link-button';
import { columnStyle } from './column.style';
import { useDroppable } from '@dnd-kit/core';
import { CardKanban } from '../atm.card-kanban';

interface ColumnsProps {
  column: CardColumns;
  cards: Card[];
}

const Column = ({ column, cards = [] }: ColumnsProps) => {
  const { setNodeRef } = useDroppable({
    id: column,
  });

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
        {cards.map((card) => (
          <CardKanban key={card.id} card={card} column={column} />
        ))}
      </div>

      <div>
        <LinkButton icon='plus' variant='link'>
          {columnStrings.addCard}
        </LinkButton>
      </div>
    </div>
  );
};

export default Column;
