import { kanbanRoutes } from '@/app/modules/home';
import { useNavigate } from 'react-router-dom';
import { Text } from '../atm.typography';

interface BoardCardProps {
  id: string;
  name: string;
  imageUrl?: string;
}

const BoardCard = ({ id, name, imageUrl }: BoardCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(kanbanRoutes.board.replace(':boardId', id));
  };

  return (
    <div className='cursor-pointer rounded-large p-x-small flex flex-col gap-2x-small' onClick={handleClick}>
      <img src={imageUrl || './CardDefault.png'} alt={name} className='w-full h-3x-large object-cover rounded-medium' />
      <Text variant='h3' className='px-x-small'>
        {name}
      </Text>
    </div>
  );
};

export default BoardCard;
