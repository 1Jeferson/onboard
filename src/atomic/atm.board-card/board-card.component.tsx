import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { kanbanRoutes } from '@/app/modules/home';
import { Text } from '../atm.typography';
import { Edit, Delete } from '../assets/icons';
import { BoardUpdate } from '../atm.board-update';
import { BoardDelete } from '../atm.delete-board';

interface BoardCardProps {
  id: string;
  name: string;
  imageUrl?: string;
  refetch: () => void;
}

const BoardCard = ({ id, name, imageUrl, refetch }: BoardCardProps) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(kanbanRoutes.board.replace(':boardId', id));
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
    <div className='rounded-large p-x-small flex flex-col gap-2x-small' onClick={handleClick}>
      <img
        src={imageUrl || './CardDefault.png'}
        alt={name}
        className='w-full h-3x-large object-cover rounded-medium cursor-pointer'
      />
      <div className='flex items-center justify-between'>
        <Text variant='h3' className='px-x-small'>
          {name}
        </Text>

        <div className='flex gap-x-2x-small'>
          <button className='cursor-pointer' onClick={handleEditClick}>
            <Edit />
          </button>

          <button className='cursor-pointer' onClick={handleDeleteClick}>
            <Delete />
          </button>
        </div>
      </div>

      <BoardUpdate id={id} name={name} isOpen={isEditModalOpen} onClose={() => setIsEditModalOpen(false)} />

      <BoardDelete
        id={id}
        isOpen={isDeleteModalOpen}
        name={name}
        onClose={() => setIsDeleteModalOpen(false)}
        refetch={refetch}
      />
    </div>
  );
};

export default BoardCard;
