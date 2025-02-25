import { ReactNode, useState } from 'react';
import { InputCaption, InputLabel } from '../atm.typography';
import { textInputStyle, TextInputVariants } from './text-input.component.style';
import { twMerge } from 'tailwind-merge';
import { Info, EyeOn, EyeOff } from '../assets/icons';

type InputTypes = 'text' | 'email' | 'password';

interface TextInputProps extends TextInputVariants {
  className?: string;
  placeholder?: string;
  label?: ReactNode;
  caption?: ReactNode;
  disabled?: boolean;
  type?: InputTypes;
  iconLabel?: 'info';
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
  iconLabel,
  type,
  iconPosition = 'right',
}: TextInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const IconComponent = iconLabel ? iconMap[iconLabel] : null;

  const togglePasswordVisibility = () => setIsPasswordVisible((prev) => !prev);

  const inputType = type === 'password' && isPasswordVisible ? 'text' : type;

  return (
    <div className={twMerge('flex flex-col w-full', className)}>
      <div className='flex items-center gap-[4px]'>
        {label && <InputLabel>{label}</InputLabel>}
        {IconComponent && (
          <span className={iconPosition === 'left' ? 'order-first' : 'order-last'}>
            <IconComponent />
          </span>
        )}
      </div>

      <div className='relative'>
        <input
          type={inputType}
          className={textInputStyle({ variant, disabled })}
          placeholder={placeholder}
          disabled={disabled}
        />

        {type === 'password' && (
          <button
            type='button'
            onClick={togglePasswordVisibility}
            className='absolute right-[12px] top-[50%] -translate-y-[50%] cursor-pointer'
          >
            {isPasswordVisible ? <EyeOff /> : <EyeOn />}
          </button>
        )}
      </div>

      <div>{caption && <InputCaption>{caption}</InputCaption>}</div>
    </div>
  );
};

export default TextInput;
