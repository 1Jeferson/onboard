import { CardColumns } from '@/app/data/graphql/generated';
import { Text } from '../atm.typography';
import { cardColumnsPT, columnStrings } from './column.strings';
import { LinkButton } from '../atm.link-button';
import { columnStyle } from './column.style';

interface ColumnsProps {
  column: CardColumns;
}

const Column = ({ column }: ColumnsProps) => {
  return (
    <div className='flex flex-col justify-between  p-small bg-gray-white rounded-large min-w-[330px] h-[660px]'>
      <div className='flex justify-between items-center pb-2x-small'>
        <Text variant='b1' className={columnStyle({ status: column })}>
          {cardColumnsPT[column]}
        </Text>
      </div>

      <div className='bg-gray-light w-full h-full p-small rounded-small'></div>

      <div>
        <LinkButton icon='plus' variant='link'>
          {columnStrings.addCard}
        </LinkButton>
      </div>
    </div>
  );
};

export default Column;
