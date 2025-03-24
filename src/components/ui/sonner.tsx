import { Toaster as Sonner, ToasterProps } from 'sonner';

const Toaster = ({ ...props }: ToasterProps) => {
  return (
    <Sonner
      className='toaster group'
      {...props}
      toastOptions={{
        classNames: {
          toast: '!border-none',
          success: '!text-gray-light !bg-feedback-success-medium',
          error: '!text-gray-light !bg-feedback-error-medium',
        },
      }}
    />
  );
};

export { Toaster };
