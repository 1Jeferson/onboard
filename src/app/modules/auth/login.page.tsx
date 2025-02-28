import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormField, FormItem, FormControl } from '@/components/ui/form';
import { Button } from '@/atomic/atm.button';
import { TextInput } from '@/atomic/atm.text-input';
import { LoginSchema, loginSchema } from './auth.schema';
import { authStrings } from './auth.strings';
import { Link, Text } from '@/atomic/atm.typography';

const LoginPage = () => {
  const form = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = (data: LoginSchema) => {
    console.log('Form Data:', data);
  };

  return (
    <Form {...form}>
      <div className='flex flex-col items-center gap-medium w-full max-w-xlarge m-auto p-2x-small sm:p-large'>
        <Text variant='h1'>{authStrings.mainText}</Text>
        <Text variant='b1' className='whitespace-pre-line text-center'>
          {authStrings.secondaryText}
        </Text>

        <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-x-small w-full px-2x-small'>
          <FormField
            control={form.control}
            name='email'
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <TextInput
                    label={authStrings.emailLabel}
                    placeholder={authStrings.emailPlaceholder}
                    variant={fieldState.error ? 'error' : 'default'}
                    type='email'
                    {...field}
                    caption={fieldState.error?.message}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='password'
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <TextInput
                    label={authStrings.passwordLabel}
                    placeholder={authStrings.passwordPlaceholder}
                    variant={fieldState.error ? 'error' : 'default'}
                    type='password'
                    {...field}
                    caption={fieldState.error?.message}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <Link className='text-end' href='/' variant='link'>
            {authStrings.linkForgotPassword}
          </Link>

          <Button type='submit' variant='primary'>
            {authStrings.button.login}
          </Button>

          <Text className='text-center' variant='b2'>
            ou
          </Text>

          <div className='flex justify-center gap-3x-small'>
            <Text variant='b1'>{authStrings.linkForgotPassword}</Text>
            <Link href='/' variant='link'>
              {authStrings.linkRegister}
            </Link>
          </div>
        </form>
      </div>
    </Form>
  );
};

export default LoginPage;
