import { TextInput } from '@/atomic/atm.text-input';

const LoginPage = () => {
  return (
    <div className='flex justify-center items-center gap-2 p-small'>
      <TextInput variant='default' label='Input label' icon='info' placeholder='Default' caption='Input caption' />
      <TextInput variant='error' label='Input label' placeholder='Error' icon='info' caption='Input caption' />
      <TextInput variant='default' disabled label='Input label' placeholder='Disabled' />
    </div>
  );
};

export default LoginPage;
