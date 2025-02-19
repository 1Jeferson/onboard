import { ReactNode } from 'react';
import { buttonStyle, ButtonStyleProps } from './button.component.style';

interface Props extends ButtonStyleProps {
  children: ReactNode;
}

const Button = ({ children, variant, disabled }: Props) => {
  return <button className={buttonStyle({ variant, disabled })}>{children}</button>;
};

export default Button;
