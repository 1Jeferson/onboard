import { CardColumns } from '@/app/data/graphql/generated';
import { useBoard } from '@/app/domain/boards/board.use-case';
import { Column } from '@/atomic/atm.column';
import { Text } from '@/atomic/atm.typography';
import { useParams } from 'react-router-dom';

const BoardPage = () => {
  const { boardId } = useParams<{ boardId: string }>();
  const { data } = useBoard({ variables: { boardId: boardId || '' } });

  const columns = [CardColumns.ToDo, CardColumns.InProgress, CardColumns.InReview, CardColumns.Done];

  return (
    <div className='w-full max-w-2xlarge p-3x-small sm:py-2x-small sm:px-2x-large'>
      <Text variant='h1' className='pb-2x-small'>
        {data?.board.name}
      </Text>

      <div className='flex gap-small overflow-x-auto'>
        {columns.map((column) => (
          <Column key={column} column={column} />
        ))}
      </div>
    </div>
  );
};

export default BoardPage;
