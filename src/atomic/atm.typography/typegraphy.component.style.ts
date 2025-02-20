import { tv, VariantProps } from 'tailwind-variants';

export const typographyStyle = tv({
  base: 'font-primary leading-[120%]',
  variants: {
    variant: {
      display: 'font-bold text-xx-large',
      h1: 'font-semibold text-x-large',
      h2: 'font-semibold text-large',
      h3: 'font-semibold text-medium',
      h4: 'font-medium text-small leading-[150%]',
      b1: 'font-regular font-secondary text-small text-gray-x-dark leading-[150%]',
      b2: 'font-regular font-secondary !text-x-small leading-[150%] text-gray-dark',
      link: 'font-secondary font-semibold text-x-small leading-[150%] text-cta-dark',
      linkSmall: 'font-secondary font-semibold !text-xx-small leading-[150%] text-cta-dark',
    },
  },
});

export const input = tv({
  base: 'font-secondary text-small leading-[150%]',
  variants: {
    type: {
      label: 'text-gray-x-dark ',
      value: 'text-gray-medium ',
      caption: 'text-feedback-warning-dark ',
    },
  },
});

export type TypographyVariants = VariantProps<typeof typographyStyle>['variant'];
export type InputVariants = VariantProps<typeof input>;
