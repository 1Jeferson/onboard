import { Outlet, useLocation } from 'react-router-dom';
import { authStrings } from './auth.strings';
import { LinkButton } from '@/atomic/atm.link-button';

const Layout = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== '/login' && (
        <header className='absolute top-medium left-small'>
          <LinkButton path='/' variant='link' icon='arrowBack'>
            {authStrings.linkBack}
          </LinkButton>
        </header>
      )}
      <div className='flex h-screen w-full'>
        <div className='flex flex-1 justify-center'>
          <Outlet />
        </div>
        <div className='w-[50%] h-full hidden sm:block'>
          <img src='/teamguina.png' alt='Guina' className='w-full h-full object-cover' />
        </div>
      </div>
    </div>
  );
};

export default Layout;
