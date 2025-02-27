import { Button } from '@/atomic/atm.button';
import { TextInput } from '@/atomic/atm.text-input';
import { authStrings } from './auth.strings';

const LoginPage = () => {
  return (
    <div className='flex w-lg m-auto flex-col items-center gap-2x-small p-small'>
      <TextInput
        variant='default'
        type='email'
        placeholder={authStrings.emailPlaceholder}
        label={authStrings.emailLabel}
      />
      <TextInput
        placeholder={authStrings.passwordPlaceholder}
        type='password'
        variant='default'
        label={authStrings.passwordLabel}
      />
      <Button variant='primary'>{authStrings.button.login}</Button>
    </div>
  );
};

export default LoginPage;
