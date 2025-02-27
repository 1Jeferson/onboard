import { ReactNode } from 'react';
import { buttonStyle, ButtonStyleProps } from './button.component.style';

interface ButtonProps extends ButtonStyleProps {
  children: ReactNode;
}

const Button = ({ children, variant, disabled }: ButtonProps) => {
  return <button className={buttonStyle({ variant, disabled })}>{children}</button>;
};

export default Button;
