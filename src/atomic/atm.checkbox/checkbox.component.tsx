import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { CheckboxSelected, CheckboxDefault } from '../assets/icons';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  disabled?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, disabled, checked, onChange, ...props }) => {
    const handleClick = () => {
      if (onChange) {
        onChange({
          target: { checked: !checked },
        } as React.ChangeEvent<HTMLInputElement>);
      }
    };

    return (
      <div className={twMerge('flex flex-col w-full', className)}>
        <button type='button' onClick={handleClick} disabled={disabled} className='flex items-center cursor-pointer'>
          {checked ? <CheckboxSelected /> : <CheckboxDefault />} {props.placeholder}
        </button>
      </div>
    );
  },
);
