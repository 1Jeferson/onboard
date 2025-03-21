import { Skeleton } from '@/components/ui/skeleton';

const CardSkeleton = () => {
  return (
    <div className='cursor-pointer rounded-large p-x-small flex flex-col gap-2x-small bg-gray-medium'>
      <Skeleton className='w-full h-3x-large object-cover rounded-medium bg-gray-x-light' />
      <Skeleton className='h-small mx-x-small bg-gray-x-light' />
    </div>
  );
};

export default CardSkeleton;
