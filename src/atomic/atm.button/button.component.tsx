import { ReactNode } from 'react';
import { buttonStyle, ButtonStyleProps } from './button.component.style';

interface ButtonProps extends ButtonStyleProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

const Button = ({ children, variant, disabled, type = 'button', ...props }: ButtonProps) => {
  return (
    <button className={buttonStyle({ variant, disabled })} type={type} {...props}>
      {children}
    </button>
  );
};

export default Button;
