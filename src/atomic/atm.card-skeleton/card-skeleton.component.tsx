import { Skeleton } from '@/components/ui/skeleton';

const CardSkeleton = () => {
  return (
    <div className='rounded-large p-x-small flex flex-col gap-2x-small bg-gray-medium'>
      <Skeleton className='object-cover rounded-medium bg-gray-x-light w-[250px] h-[120px]' />
      <Skeleton className='h-small mx-x-small bg-gray-x-light' />
    </div>
  );
};

export default CardSkeleton;
