import { ReactNode } from 'react';
import { InputCaption, InputLabel } from '../atm.typography';
import { textInputStyle, TextInputVariants } from './text-input.component.style';
import { twMerge } from 'tailwind-merge';
import { Info } from '../assets/icons';

interface TextInputProps extends TextInputVariants {
  className?: string;
  placeholder?: string;
  label?: ReactNode;
  caption?: ReactNode;
  disabled?: boolean;
  icon?: 'info';
  iconPosition?: 'left' | 'right';
}

const iconMap = {
  info: Info,
};

const TextInput = ({
  placeholder,
  variant,
  className,
  label,
  caption,
  disabled,
  icon,
  iconPosition = 'right',
}: TextInputProps) => {
  const IconComponent = icon ? iconMap[icon] : null;

  return (
    <div className={twMerge('flex flex-col', className)}>
      <div
        className={`flex items-center ${iconPosition === 'right' ? 'flex-row' : 'flex-row-reverse'} gap-[4px] min-h-[20px]`}
      >
        {label && <InputLabel>{label}</InputLabel>}
        {IconComponent && <IconComponent />}
      </div>
      <input className={textInputStyle({ variant, disabled })} placeholder={placeholder} disabled={disabled} />
      <div className='min-h-[20px]'>{caption && <InputCaption>{caption}</InputCaption>}</div>
    </div>
  );
};

export default TextInput;
