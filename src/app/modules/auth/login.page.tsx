import { LoginInput } from '@/app/data/graphql/generated';
import { Button } from '@/atomic/atm.button';
import { TextInput } from '@/atomic/atm.text-input';
import { InputCaption, Link, Text } from '@/atomic/atm.typography';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { loginSchema } from './auth.schema';
import { authStrings } from './auth.strings';
import { useState } from 'react';
import { useLogin } from '@/app/domain/auth/login.use-case';
import { useNavigate } from 'react-router-dom';
import { kanbanRoutes } from '../home';
import authRoutes from './auth.routes';

const LoginPage = () => {
  const form = useForm<LoginInput>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });


  const navigate = useNavigate();

  const [serverError, setServerError] = useState<string | null>(null);

  const { login, loading } = useLogin({
    onCompleted(data) {
      navigate(kanbanRoutes.home);
      setServerError(null);
    },
    onError(error) {
      setServerError(error.message);
    },
  });

  const onSubmit = (data: LoginInput) => {
    setServerError(null);
    login({ data });

  };

  return (
    <Form {...form}>
      <div className='flex flex-col items-center gap-3x-small w-full max-w-xlarge m-auto p-x-small sm:p-small'>
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

          <Button type='submit' variant='primary' disabled={loading}>
            {loading ? authStrings.loading : authStrings.button.login}
          </Button>

          {serverError && <InputCaption className='text-center'>{serverError}</InputCaption>}

          <Text className='text-center' variant='b2'>
            ou
          </Text>

          <div className='flex justify-center gap-3x-small'>
            <Text variant='b1'>{authStrings.linkForgotPassword}</Text>
            <Link href={authRoutes.register} variant='link'>
              {authStrings.register}
            </Link>
          </div>
        </form>
      </div>
    </Form>
  );
};

export default LoginPage;
