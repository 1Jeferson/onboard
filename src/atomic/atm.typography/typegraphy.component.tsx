import { ElementType, ReactNode } from 'react';
import { input, typographyStyle, TypographyVariants } from './typegraphy.component.style';

interface TextProps {
  variant: TypographyVariants;
  children: ReactNode;
  className?: string;
  as?: ElementType;
}

interface LinkProps extends TextProps {
  href?: string;
  target?: string;
  rel?: string;
}

interface InputProps {
  className?: string;
  children: ReactNode;
}

export const Text = ({ as: Component = 'p', variant, className = '', children }: TextProps) => {
  return <Component className={`${className} ${typographyStyle({ variant })}`}>{children}</Component>;
};

export const Link = ({ as: Component = 'a', variant, className = '', href, target, rel, children }: LinkProps) => {
  return (
    <Component href={href} target={target} rel={rel} className={`${typographyStyle({ variant })} ${className}`}>
      {children}
    </Component>
  );
};

export const InputLabel = ({ className = '', children }: InputProps) => (
  <label className={`${input({ type: 'label' })} ${className}`}>{children}</label>
);

export const InputValue = ({ className = '', children }: InputProps) => (
  <label className={`${input({ type: 'value' })} ${className}`}>{children}</label>
);

export const InputCaption = ({ className = '', children }: InputProps) => (
  <span className={`${input({ type: 'caption' })} ${className}`}>{children}</span>
);
