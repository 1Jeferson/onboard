import { tv } from 'tailwind-variants';

export const boardSkeletonStyle = tv({
  slots: {
    wrapper: 'rounded-large p-x-small flex flex-col gap-2x-small bg-gray-light',
    banner: 'w-full h-3x-large object-cover rounded-medium bg-gray-x-light',
    title: 'h-small mx-x-small bg-gray-x-light',
  },
});
