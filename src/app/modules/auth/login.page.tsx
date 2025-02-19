import { Button } from '../../../atomic/atm.button';

const LoginPage = () => {
  return (
    <div className='flex gap-2 p-small'>
      <Button variant='primary'>Button label</Button>
      <Button variant='secondary'>Button label</Button>
      <Button variant='primaryDestructive'>Button label</Button>
      <Button variant='secondaryDestructive'>Button label</Button>
      <Button variant='cta'>Button label</Button>
      <Button variant='link'>Button label</Button>
    </div>
  );
};

export default LoginPage;
