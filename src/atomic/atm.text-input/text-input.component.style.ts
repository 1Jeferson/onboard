import { tv, VariantProps } from 'tailwind-variants';

export const textInputStyle = tv({
  base: 'rounded-xsmall font-secondary p-xx-small focus:outline-none w-full',
  variants: {
    variant: {
      default: 'border-1 border-gray-medium focus:border-brand-primary-dark',
      error: 'border-1 border-gray-medium focus:border-feedback-error-medium',
    },
    disabled: {
      true: 'border-1 border-gray-medium',
    },
  },
});

export type TextInputVariants = VariantProps<typeof textInputStyle>;
