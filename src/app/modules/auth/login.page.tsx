import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Form, FormField, FormItem, FormControl } from '@/components/ui/form';
import { Button } from '@/atomic/atm.button';
import { TextInput } from '@/atomic/atm.text-input';
import { authStrings } from './auth.strings';
import { LoginSchema, loginSchema } from './auth.schema';

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
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-x-small max-w-md m-auto'>
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

        <Button type='submit' variant='primary' children={authStrings.button.login} />
      </form>
    </Form>
  );
};

export default LoginPage;
