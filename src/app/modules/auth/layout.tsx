import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className='flex h-screen w-full'>
      <div className='flex flex-1 justify-center'>
        <Outlet />
      </div>
      <div className='w-[50%] h-full hidden sm:block'>
        <img src='/teamguina.png' alt='Guina' className='w-full h-full object-cover' />
      </div>
    </div>
  );
};

export default Layout;
