import { useUserStore } from '@/app/store';
import { Edit } from '../assets/icons';
import { Text } from '../atm.typography';
import { Card, CardColumns } from '@/app/data/graphql/generated';
import { useSortable } from '@dnd-kit/sortable';

interface CardProps {
  column?: CardColumns;
  card: Card;
}

const CardKanban = ({ card, column }: CardProps) => {
  const date = new Date(card.createdAt).toLocaleDateString('pt-br');
  const { name } = useUserStore();

  const { attributes, listeners, isDragging, setNodeRef } = useSortable({
    id: card.id,
    data: { column },
  });

  const style = {
    opacity: isDragging ? 0.7 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className='flex flex-col gap-x-small p-x-small bg-gray-white rounded-medium cursor-grab'
    >
      <div className='flex flex-col gap-x-small'>
        <Text variant='h4'>{card.name}</Text>
        <div className='flex items-center gap-2x-small'>
          <img src='/Perfil2.png' alt='Avatar' className='sm:w-medium sm:h-medium' />
          <Text variant='b1'>{name}</Text>
        </div>
      </div>

      <div className='flex justify-between items-center mt-x-small'>
        <Text variant='b2' className='flex items-center gap-3x-small cursor-pointer'>
          <Edit />
        </Text>
        <Text variant='b2'>{date}</Text>
      </div>
    </div>
  );
};

export default CardKanban;
