import { useUserStore } from '@/app/store';
import { Delete, Edit } from '../assets/icons';
import { Text } from '../atm.typography';
import { Card, CardColumns } from '@/app/data/graphql/generated';
import { useSortable } from '@dnd-kit/sortable';
import { useState } from 'react';
import { UpdateCard } from '../atm.update-card';
import { DeleteCard } from '../atm.delete-card';

interface CardProps {
  column?: CardColumns;
  card: Card;
  refetch: () => void;
}

const CardKanban = ({ card, column, refetch }: CardProps) => {
  const date = new Date(card.createdAt).toLocaleDateString('pt-br');
  const { name } = useUserStore();
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

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

  const handleDeleteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsDeleteModalOpen(true);
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

      <div className='flex gap-x-2x-small justify-between'>
        <div className='flex gap-x-3x-small'>
          <button className='cursor-pointer' onClick={handleEditClick}>
            <Edit />
          </button>

          <button className='cursor-pointer' onClick={handleDeleteClick}>
            <Delete />
          </button>
        </div>
        <Text variant='b2'>{date}</Text>
      </div>

      <UpdateCard isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} initialData={card} />

      <DeleteCard
        id={card.id}
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        refetch={refetch}
      />
    </div>
  );
};

export default CardKanban;
