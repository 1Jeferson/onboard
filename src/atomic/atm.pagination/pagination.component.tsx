import { homeStrings } from '@/app/modules/home/home.strings';
import { Button } from '@/atomic/atm.button';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  offset: number;
  limit: number;
  onPageChange: (newOffset: number) => void;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
}

const Pagination = ({
  currentPage,
  totalPages,
  offset,
  limit,
  onPageChange,
  hasPreviousPage,
  hasNextPage,
}: PaginationProps) => {
  return (
    <div className='fixed bottom-0 py-x-small mt-x-small'>
      <div className='flex justify-between items-center gap-x-2x-small'>
        <Button variant='primary' onClick={() => onPageChange(Math.max(offset - limit, 0))} disabled={!hasPreviousPage}>
          {homeStrings.previousPage}
        </Button>

        <div className='flex justify-center gap-x-2x-small'>
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={index}
              variant={currentPage === index + 1 ? 'primary' : 'secondary'}
              onClick={() => onPageChange(index * limit)}
            >
              {index + 1}
            </Button>
          ))}
        </div>

        <Button variant='primary' onClick={() => onPageChange(offset + limit)} disabled={!hasNextPage}>
          {homeStrings.nextPage}
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
