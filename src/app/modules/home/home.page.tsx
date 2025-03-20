import { useState } from 'react';
import { Text } from '@/atomic/atm.typography';
import { homeStrings } from './home.strings';
import { useListBoards } from '@/app/domain/boards/list-boards.use-case';
import { authStrings } from '../auth/auth.strings';
import { EmptyProject } from '@/atomic/atm.empty-projetc';
import { CreateBoard } from '@/atomic/atm.create-board';
import { Pagination } from '@/atomic/atm.pagination';
import { BoardCard } from '@/atomic/atm.board-card';

const HomePage = () => {
  const [offset, setOffset] = useState(0);
  const limit = 6;

  const { boards, loading, refetch } = useListBoards({
    variables: { pageInput: { offset, limit: limit - 1 } },
  });

  const totalPages = boards?.count ? Math.ceil(boards.count / limit) : 1;
  const currentPage = Math.floor(offset / limit) + 1;
  const hasPreviousPage = offset > 0;
  const hasNextPage = offset + limit < (boards?.count || 0);

  const handlePageChange = (newOffset: number) => {
    setOffset(newOffset);
  };

  const handleCreateProject = () => {
    refetch();
  };

  return (
    <>
      <Text variant='h1'>{homeStrings.allProjects}</Text>
      <div className='flex flex-col mt-2x-small items-center min-h-screen'>
        {loading ? (
          <div>{authStrings.loading}</div>
        ) : boards?.nodes.length ? (
          <>
            <div className='grid grid-cols-3 gap-x-small w-full'>
              <div className='col-span-1'>
                <CreateBoard onCreate={handleCreateProject} />
              </div>

              {boards.nodes.map((board) => (
                <BoardCard key={board.id} id={board.id} name={board.name} />
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              offset={offset}
              limit={limit}
              onPageChange={handlePageChange}
              hasPreviousPage={hasPreviousPage}
              hasNextPage={hasNextPage}
            />
          </>
        ) : (
          <EmptyProject onCreate={handleCreateProject} />
        )}
      </div>
    </>
  );
};

export default HomePage;
