import { Skeleton } from '@/components/ui/skeleton';
import { cardSkeletonStyle } from './card-skeleton.styles';

const { container, title, avatarWrapper, avatar, name, footer, icons, icon, date } = cardSkeletonStyle();

const CardSkeleton = () => {
  return (
    <div className={container()}>
      <Skeleton className={title()} />
      <div className={avatarWrapper()}>
        <Skeleton className={avatar()} />
        <Skeleton className={name()} />
      </div>
      <div className={footer()}>
        <div className={icons()}>
          <Skeleton className={icon()} />
          <Skeleton className={icon()} />
        </div>
        <Skeleton className={date()} />
      </div>
    </div>
  );
};

export default CardSkeleton;
