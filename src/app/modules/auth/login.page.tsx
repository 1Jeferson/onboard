import { Button } from '@/atomic/atm.button';
import { TextInput } from '@/atomic/atm.text-input';

const LoginPage = () => {
  return (
    <div className='flex w-lg m-auto flex-col items-center gap-[8px] p-small'>
      <TextInput variant='default' type='email' placeholder='Digite seu e-mail' label='E-mail' />
      <TextInput placeholder='Digite sua senha' type='password' variant='default' label='Senha' />
      <Button variant='primary'>Login</Button>
    </div>
  );
};

export default LoginPage;
