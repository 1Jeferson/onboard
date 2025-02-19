import { Button } from '../../../atomic/atm.button';
import { LinkButton } from '../../../atomic/atm.link-button';

const LoginPage = () => {
  return (
    <div className='flex gap-2 p-small'>
      <Button variant='primary'>Button label</Button>
      <Button variant='link'>Button label</Button>
      <LinkButton variant='link' path='/auth/login' iconName='arrowBack'>
        Voltar para o início
      </LinkButton>
    </div>
  );
};

export default LoginPage;
