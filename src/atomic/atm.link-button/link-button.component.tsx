import { ReactNode } from 'react';
import { buttonStyle, ButtonStyleProps } from '../atm.button/button.component.style';
import { HiOutlineArrowLeft, HiPlus } from 'react-icons/hi2';

interface Props extends ButtonStyleProps {
  children: ReactNode;
  path: string;
  iconName?: 'arrowBack' | 'plus';
  iconPosition?: 'left' | 'right';
}

const iconMap = {
  arrowBack: <HiOutlineArrowLeft size={20} />,
  plus: <HiPlus size={20} />,
};

const LinkButton = ({ children, path, disabled, iconName, iconPosition = 'left' }: Props) => {
  return (
    <a href={path} className={buttonStyle({ variant: 'link', disabled })}>
      <div className={`flex items-center ${iconPosition === 'right' ? 'flex-row-reverse' : ''}`}>
        {iconName && <span className='mr-1'>{iconMap[iconName]}</span>}
        {children}
      </div>
    </a>
  );
};

export default LinkButton;
