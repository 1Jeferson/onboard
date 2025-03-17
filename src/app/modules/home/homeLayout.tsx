import { useUserStore } from '@/app/store';
import { LinkButton } from '@/atomic/atm.link-button';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  const { name } = useUserStore();

  return (
    <div className='flex flex-col h-screen items-center'>
      <nav className='w-full max-w-2xlarge flex items-center justify-between gap-medium p-3x-small sm:py-2x-small sm:px-2x-large'>
        <img src='/logo.png' alt='Logo Instaq' className='w-16 h-16 sm:w-large sm:h-large' />

        <div>
          <LinkButton variant='link' icon='pickerDown' iconPosition='right' className='flex gap-2x-small items-center'>
            {name}
            <img src='/Perfil2.png' alt='Avatar' className='w-10 sm:w-medium' />
          </LinkButton>
        </div>
      </nav>

      <div className='flex-1 w-full max-w-2xlarge p-x-small sm:py-large sm:px-2x-large'>
        <Outlet />
      </div>
    </div>
  );
};

export default HomeLayout;
