import { useUserStore } from '@/app/store';
import { Edit } from '../assets/icons';
import { Text } from '../atm.typography';
import { Card, CardColumns } from '@/app/data/graphql/generated';
import { useSortable } from '@dnd-kit/sortable';
import { useState } from 'react';
import { UpdateCard } from '../atm.update-card';

interface CardProps {
  column?: CardColumns;
  card: Card;
}

const CardKanban = ({ card, column }: CardProps) => {
  const date = new Date(card.createdAt).toLocaleDateString('pt-br');
  const { name } = useUserStore();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const { attributes, listeners, isDragging, setNodeRef } = useSortable({
    id: card.id,
    data: { column },
  });

  const style = {
    opacity: isDragging ? 0.7 : 1,
  };

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsEditModalOpen(true);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className='flex flex-col gap-x-small p-x-small bg-gray-white rounded-medium cursor-grab'
    >
      <div {...attributes} {...listeners} className='flex flex-col gap-x-small'>
        <Text variant='h4'>{card.name}</Text>
        <div className='flex items-center gap-2x-small'>
          <img src='/Perfil2.png' alt='Avatar' className='sm:w-medium sm:h-medium' />
          <Text variant='b1'>{name}</Text>
        </div>
      </div>

      <div className='flex justify-between items-center mt-x-small'>
        <button className='cursor-pointer' onClick={handleEditClick}>
          <Edit />
        </button>
        <Text variant='b2'>{date}</Text>
      </div>

      <UpdateCard isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} initialData={card} />
    </div>
  );
};

export default CardKanban;
