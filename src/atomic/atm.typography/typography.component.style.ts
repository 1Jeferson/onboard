import { tv, VariantProps } from 'tailwind-variants';

export const typographyStyle = tv({
  base: 'font-primary leading-tight',
  variants: {
    variant: {
      display: 'font-bold text-xx-large',
      h1: 'font-semibold text-x-large',
      h2: 'font-semibold text-large',
      h3: 'font-semibold text-medium',
      h4: 'font-medium text-small leading-snug',
      b1: 'font-regular font-secondary text-small text-gray-x-dark leading-snug',
      b2: 'font-regular font-secondary !text-x-small leading-snug text-gray-dark',
      link: 'font-secondary font-semibold text-x-small leading-snug text-cta-dark',
      linkSmall: 'font-secondary font-semibold !text-xx-small leading-snug text-cta-dark',
    },
  },
});

export const input = tv({
  base: 'font-secondary text-small',
  variants: {
    type: {
      label: 'text-gray-x-dark ',
      value: 'text-gray-medium ',
      caption: 'text-feedback-warning-dark',
    },
  },
});

export type TypographyVariants = VariantProps<typeof typographyStyle>['variant'];
export type InputVariants = VariantProps<typeof input>;
