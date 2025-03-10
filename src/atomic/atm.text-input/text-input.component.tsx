import { ReactNode, useState, forwardRef } from 'react';
import { InputCaption, InputLabel } from '../atm.typography';
import { textInputStyle, TextInputVariants } from './text-input.component.style';
import { twMerge } from 'tailwind-merge';
import { Info, EyeOn, EyeOff, CheckboxSelected, CheckboxDefault } from '../assets/icons';

type InputTypes = 'text' | 'email' | 'password' | 'checkbox';

interface TextInputProps extends TextInputVariants, React.InputHTMLAttributes<HTMLInputElement> {
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

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    { placeholder, variant, className, label, caption, disabled, iconLabel, type, iconPosition = 'right', ...props },
    ref,
  ) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const IconComponent = iconLabel ? iconMap[iconLabel] : null;

    const togglePasswordVisibility = () => setIsPasswordVisible((prev) => !prev);

    const inputType = type === 'password' && isPasswordVisible ? 'text' : type;

    return (
      <div className={twMerge('flex flex-col w-full', className)}>
        <div className='flex items-center gap-3x-small'>
          {label && <InputLabel>{label}</InputLabel>}
          {IconComponent && (
            <span className={iconPosition === 'left' ? 'order-first' : 'order-last'}>
              <IconComponent />
            </span>
          )}
        </div>

        <div className='relative'>
          {type === 'checkbox' ? (
            <button
              type='button'
              onClick={() => {
                const newCheckedState = !props.checked;
                if (props.onChange) {
                  props.onChange({
                    target: { value: String(newCheckedState), checked: newCheckedState },
                  } as React.ChangeEvent<HTMLInputElement>);
                }
              }}
              disabled={disabled}
              className='flex items-center cursor-pointer'
            >
              {props.checked ? <CheckboxSelected /> : <CheckboxDefault />} {placeholder}
            </button>
          ) : (
            <input
              ref={ref}
              type={inputType}
              className={textInputStyle({ variant, disabled })}
              placeholder={placeholder}
              disabled={disabled}
              {...props}
            />
          )}

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
  },
);

export default TextInput;
