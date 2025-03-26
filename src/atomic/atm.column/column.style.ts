import { CardColumns } from '@/app/data/graphql/generated';
import { tv } from 'tailwind-variants';

export const columnStyle = tv({
  base: 'p-3x-small rounded-small',
  variants: {
    status: {
      [CardColumns.ToDo]: 'bg-gray-light',
      [CardColumns.InProgress]: 'bg-feedback-warning-light',
      [CardColumns.InReview]: 'bg-feedback-error-light',
      [CardColumns.Done]: 'bg-feedback-success-light',
    },
  },
});
