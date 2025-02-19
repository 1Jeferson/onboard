import { tv, VariantProps } from 'tailwind-variants';

export const buttonStyle = tv({
  base: 'font-family-secondary rounded-small font-medium text-white cursor-pointer py-xx-small px-x-small',
  variants: {
    variant: {
      primary:
        'bg-brand-primary-dark hover:bg-brand-primary-x-dark focus:outline focus:outline-2 focus:outline-cta-medium active:bg-feedback-success-x-dark',
      secondary:
        'text-brand-primary-dark border-1 border-brand-primary-dark hover:text-brand-primary-x-dark hover:border-brand-primary-x-dark active:border-brand-primary-dark active:text-brand-primary-x-dark focus:outline focus:outline-2 focus:outline-brand-primary-dark',
      primaryDestructive:
        'bg-feedback-error-medium hover:bg-feedback-error-dark active:bg-feedback-error-x-dark focus:outline focus:outline-2 focus:outline-feedback-error-medium',
      secondaryDestructive:
        'text-feedback-error-medium border-1 border-feedback-error-medium hover:text-feedback-error-dark hover:border-feedback-error-dark active:border-feedback-error-medium active:text-feedback-error-dark focus:outline focus:outline-2 focus:outline-feedback-error-medium',
      cta: 'bg-gray-x-dark hover:bg-gray-dark focus:outline focus:outline-2 focus:outline-gray-xx-dark active:bg-gray-xx-dark',
      link: 'text-brand-primary-dark hover:underline focus:outline focus:outline-2 focus:outline-brand-primary active:text-brand-accessory-magenta active:outline-none',
    },
    disabled: {
      true: 'opacity-50 pointer-events-none',
    },
  },
});

export type ButtonStyleProps = VariantProps<typeof buttonStyle>;
