import { tv } from 'tailwind-variants';

export const cardSkeletonStyle = tv({
  slots: {
    container: 'flex flex-col gap-x-small p-x-small bg-gray-white rounded-medium w-full',
    title: 'h-base bg-gray-x-light rounded-full',
    avatarWrapper: 'flex items-center gap-small mt-x-small',
    avatar: 'w-medium h-medium rounded-full bg-gray-x-light',
    name: 'h-small w-full bg-gray-x-light rounded-small',
    footer: 'flex justify-between items-center mt-x-small',
    icons: 'flex gap-2x-small',
    icon: 'w-small h-small rounded-full bg-gray-x-light',
    date: 'h-small w-2x-large bg-gray-x-light rounded-small',
  },
});
