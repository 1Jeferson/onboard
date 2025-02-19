import { ReactNode } from 'react';
import { buttonStyle, ButtonStyleProps } from '../atm.button/button.component.style';
import { HiOutlineArrowLeft, HiPlus } from 'react-icons/hi2';

interface Props extends ButtonStyleProps {
  children: ReactNode;
  path: string;
  iconName: 'arrowBack' | 'plus';
}

const iconMap = {
  arrowBack: <HiOutlineArrowLeft size={20} />,
  plus: <HiPlus size={20} />,
};

const LinkButton = ({ children, path, disabled, iconName }: Props) => {
  return (
    <a href={path} className={buttonStyle({ variant: 'link', disabled })}>
      {iconName && <span className='mr-1'>{iconMap[iconName]}</span>}
      {children}
    </a>
  );
};

export default LinkButton;
