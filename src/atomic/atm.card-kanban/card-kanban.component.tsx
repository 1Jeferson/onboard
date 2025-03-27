import { useUserStore } from '@/app/store';
import { Edit } from '../assets/icons';
import { Text } from '../atm.typography';
import { Card } from '@/app/data/graphql/generated';

interface CardProps {
  card?: Card;
}

const CardKanban = ({ card }: CardProps) => {
  const date = new Date(card?.createdAt).toLocaleDateString('pt-br');
  const { name } = useUserStore();

  return (
    <div className='flex flex-col gap-x-small p-x-small bg-gray-white rounded-medium cursor-pointer'>
      <div className='flex flex-col gap-x-small'>
        <Text variant='h4'>{card?.name}</Text>

        <div className='flex items-center gap-2x-small'>
          <img src='/Perfil2.png' alt='Avatar' className='sm:w-medium sm:h-medium' />
          <Text variant='b1'>{name}</Text>
        </div>
      </div>

      <div className='flex justify-between items-center mt-x-small'>
        <Text variant='b2' className='flex items-center gap-3x-small'>
          <Edit />
        </Text>

        <Text variant='b2'>{date}</Text>
      </div>
    </div>
  );
};

export default CardKanban;
