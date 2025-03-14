import { InputCaption, Link, Text } from '@/atomic/atm.typography';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { authStrings } from './auth.strings';
import { TextInput } from '@/atomic/atm.text-input';
import { Button } from '@/atomic/atm.button';
import authRoutes from './auth.routes';
import { useForm } from 'react-hook-form';
import { UserInput } from '@/app/data/graphql/generated';
import { zodResolver } from '@hookform/resolvers/zod';
import { registerSchema } from './auth.schema';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useRegister } from '@/app/domain/auth/register.use-case';
import { kanbanRoutes } from '../home';
import { Checkbox } from '@/atomic/atm.checkbox';

interface RegisterFormInput extends UserInput {
  passwordConfirmation: string;
  acceptedTerms: boolean;
}

const RegisterPage = () => {
  const form = useForm<RegisterFormInput>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      acceptedTerms: false,
    },
  });

  const navigate = useNavigate();

  const [serverError, setServerError] = useState<string | null>(null);

  const { register, loading } = useRegister({
    onCompleted(data) {
      navigate(kanbanRoutes.home);
      setServerError(null);
    },
    onError(error) {
      setServerError(error.message);
    },
  });

  const onSubmit = (data: UserInput) => {
    const { name, email, password } = data;
    register({ data: { name, email, password } });
  };

  return (
    <Form {...form}>
      <div className='flex flex-col items-center w-full gap-3x-small max-w-xlarge m-auto p-x-small sm:p-small'>
        <Text variant='h1'>{authStrings.register}</Text>
        <Text variant='b1' className='whitespace-pre-line text-center'>
          {authStrings.secondaryText}
        </Text>

        <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-x-small w-full px-2x-small'>
          <FormField
            control={form.control}
            name='name'
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <TextInput
                    label={authStrings.nameLabel}
                    placeholder={authStrings.namePlaceholder}
                    variant={fieldState.error ? 'error' : 'default'}
                    type='text'
                    {...field}
                    caption={fieldState.error?.message}
                  />
                </FormControl>
              </FormItem>
            )}
          />
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

          <FormField
            control={form.control}
            name='passwordConfirmation'
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <TextInput
                    label={authStrings.confirmPasswordLabel}
                    placeholder={authStrings.confirmPasswordPlaceholder}
                    variant={fieldState.error ? 'error' : 'default'}
                    type='password'
                    {...field}
                    caption={fieldState.error?.message}
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <div className='flex flex-wrap gap-2x-small'>
            <FormField
              control={form.control}
              name='acceptedTerms'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Checkbox name='acceptedTerms'>{authStrings.confirmTerms}</Checkbox>
                  </FormControl>
                </FormItem>
              )}
            />

            <Text variant='b1'>{authStrings.confirmTerms}</Text>
            <Link href='#' variant='link'>
              {authStrings.linkTerms}
            </Link>
            <Text variant='b1'>e</Text>
            <Link href='#' variant='link'>
              {authStrings.linkPolicy}
            </Link>
          </div>
          <div>
            <InputCaption>{form.formState.errors.acceptedTerms?.message}</InputCaption>
          </div>

          {serverError && <InputCaption className='text-center'>{serverError}</InputCaption>}

          <Button type='submit' variant='primary' disabled={loading}>
            {loading ? authStrings.loading : authStrings.button.register}
          </Button>

          <Text className='text-center' variant='b2'>
            ou
          </Text>

          <div className='flex justify-center gap-3x-small'>
            <Text variant='b1'>{authStrings.haveAnAccount}</Text>
            <Link href={authRoutes.login} variant='link'>
              {authStrings.login}
            </Link>
          </div>
        </form>
      </div>
    </Form>
  );
};

export default RegisterPage;
