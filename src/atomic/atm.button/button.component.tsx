import { ReactNode } from 'react';
import { buttonStyle, ButtonStyleProps } from './button.component.style';
import { authStrings } from '@/app/modules/auth/auth.strings';

interface ButtonProps extends ButtonStyleProps, React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  loading?: boolean;
}

const Button = ({ children, variant, disabled, loading, type = 'button', ...props }: ButtonProps) => {
  return (
    <button
      className={buttonStyle({ variant, disabled: disabled || loading })}
      type={type}
      {...props}
      disabled={disabled || loading}
    >
      {loading ? authStrings.loading : children}
    </button>
  );
};

export default Button;
