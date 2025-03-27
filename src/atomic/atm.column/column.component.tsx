import { CardColumns } from '@/app/data/graphql/generated';
import { Text } from '../atm.typography';
import { cardColumnsPT, columnStrings } from './column.strings';
import { LinkButton } from '../atm.link-button';
import { columnStyle } from './column.style';
import { useParams } from 'react-router-dom';
import { useListCards } from '@/app/domain/cards/list.cards.use-case';
import { toast } from 'sonner';
import { CardKanban } from '../atm.card-kanban';
import { cardKanbanStrings } from '../atm.card-kanban/card-kanban.strings';

interface ColumnsProps {
  column: CardColumns;
}

const Column = ({ column }: ColumnsProps) => {
  const { boardId } = useParams<{ boardId: string }>();

  const { data } = useListCards({
    variables: { boardId: boardId ?? '', column },
    onError: () => {
      toast.error(cardKanbanStrings.error);
    },
  });

  return (
    <div className='flex flex-col justify-between p-small bg-gray-white rounded-large min-w-[330px] h-[660px]'>
      <div className='flex justify-between items-center pb-2x-small'>
        <Text variant='b1' className={columnStyle({ status: column })}>
          {cardColumnsPT[column]}
        </Text>
      </div>

      <div className='bg-gray-light w-full h-full p-small rounded-small flex flex-col gap-small overflow-y-auto'>
        {data?.cards.filter((card) => card.column === column).map((card) => <CardKanban key={card.id} card={card} />)}
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
