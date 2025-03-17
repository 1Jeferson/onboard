import { ReactNode } from 'react';
import { buttonStyle, ButtonStyleProps } from '../atm.button/button.component.style';
import { Arrow, Add, PickerDown } from '../assets/icons';
import { twMerge } from 'tailwind-merge';

interface LinkButtonProps extends ButtonStyleProps {
  className?: string;
  children: ReactNode;
  path?: string;
  icon?: 'arrowBack' | 'plus' | 'pickerDown';
  iconPosition?: 'left' | 'right';
}

const iconMap = {
  arrowBack: <Arrow />,
  plus: <Add />,
  pickerDown: <PickerDown />,
};

const LinkButton = ({ children, path, disabled, icon, iconPosition = 'left' }: LinkButtonProps) => {
  return (
    <a href={path} className={twMerge(buttonStyle({ variant: 'link', disabled }))}>
      <div className={twMerge('flex items-center gap-3x-small', iconPosition === 'right' && 'flex-row-reverse')}>
        {icon && <span>{iconMap[icon]}</span>}
        {children}
      </div>
    </a>
  );
};

export default LinkButton;
