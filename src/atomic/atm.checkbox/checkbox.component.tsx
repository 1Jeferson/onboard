import { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { CheckboxSelected, CheckboxDefault } from '../assets/icons';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  disabled?: boolean;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(function CheckboxComponent(
  { className, disabled, checked, onChange, ...props },
  ref,
) {
  const handleClick = () => {
    if (onChange) {
      onChange({
        target: { checked: !checked },
      } as React.ChangeEvent<HTMLInputElement>);
    }
  };

  return (
    <div className={twMerge('flex w-full', className)}>
      <button type='button' onClick={handleClick} disabled={disabled} className='flex items-center cursor-pointer'>
        {checked ? <CheckboxSelected /> : <CheckboxDefault />} {props.placeholder}
      </button>

      <input type='checkbox' ref={ref} checked={checked} onChange={onChange} hidden {...props} />
    </div>
  );
});
