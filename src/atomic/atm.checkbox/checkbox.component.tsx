import { FC, ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import { CheckboxDefault, CheckboxSelected } from '../assets/icons';
import { twMerge } from 'tailwind-merge';

interface CheckboxInputProps {
  name: string;
  children?: ReactNode;
  className?: string;
}

const Checkbox: FC<CheckboxInputProps> = ({ name, children, className }) => {
  const { register, watch } = useFormContext();

  const isChecked = watch(name);

  return (
    <div className={twMerge('flex flex-col gap-1', className)}>
      <label className='flex items-center gap-2x-small cursor-pointer'>
        <input type='checkbox' {...register(name)} className='hidden' />
        {isChecked ? <CheckboxSelected /> : <CheckboxDefault />}

        <span className='text-left leading-none'>{children}</span>
      </label>
    </div>
  );
};

export default Checkbox;
