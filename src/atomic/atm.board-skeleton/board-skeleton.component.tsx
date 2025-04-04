import { Skeleton } from '@/components/ui/skeleton';
import { boardSkeletonStyle } from './board-skeleton.styles';

const { wrapper, banner, title } = boardSkeletonStyle();

const BoardSkeleton = () => {
  return (
    <div className={wrapper()}>
      <Skeleton className={banner()} />
      <Skeleton className={title()} />
    </div>
  );
};

export default BoardSkeleton;
