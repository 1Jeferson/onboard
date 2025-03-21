import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { kanbanRoutes } from '@/app/modules/home';
import { Text } from '../atm.typography';
import { Edit } from '../assets/icons';
import { BoardUpdate } from '../atm.board-update';

interface BoardCardProps {
  id: string;
  name: string;
  imageUrl?: string;
}

const BoardCard = ({ id, name, imageUrl }: BoardCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(kanbanRoutes.board.replace(':boardId', id));
  };

  const handleEditClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(true);
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

        <button className='cursor-pointer' onClick={handleEditClick}>
          <Edit />
        </button>
      </div>

      <BoardUpdate id={id} name={name} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default BoardCard;
