import { InputCaption, InputLabel, InputValue, Link, Text } from '@/atomic/atm.typography';

const LoginPage = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-2 p-small'>
      <Text variant='display'>Display</Text>
      <Text variant='h1'>Heading 1</Text>
      <Text variant='h2'>Heading 2</Text>
      <Text variant='h3'>Heading 3</Text>
      <Text variant='h4'>Heading 4</Text>
      <Link variant='linkSmall' href='/'>
        Link small
      </Link>
      <Link href='/auth/login' variant='link'>
        Link
      </Link>
      <Text variant='b1'>Body</Text>
      <Text variant='b2'>Body 2</Text>

      <InputCaption>Input caption</InputCaption>
      <InputLabel>Input Label</InputLabel>
      <InputValue>Input Value</InputValue>
    </div>
  );
};

export default LoginPage;
