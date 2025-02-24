import { ReactNode } from 'react';
import { buttonStyle, ButtonStyleProps } from '../atm.button/button.component.style';
import { Arrow, Add } from '../assets/icons';

interface Props extends ButtonStyleProps {
  children: ReactNode;
  path: string;
  icon?: 'arrowBack' | 'plus';
  iconPosition?: 'left' | 'right';
}

const iconMap = {
  arrowBack: <Arrow />,
  plus: <Add />,
};

const LinkButton = ({ children, path, disabled, icon, iconPosition = 'left' }: Props) => {
  return (
    <a href={path} className={buttonStyle({ variant: 'link', disabled })}>
      <div className={`flex items-center ${iconPosition === 'right' ? 'flex-row-reverse' : ''}`}>
        {icon && <span className='mr-1'>{iconMap[icon]}</span>}
        {children}
      </div>
    </a>
  );
};

export default LinkButton;
