import { CreateCardSchema, createCardSchema } from '@/app/modules/board/board.schema';
import { Form, FormField, FormItem, FormControl } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { TextInput } from '../atm.text-input';
import { Button } from '../atm.button';
import { InputCaption } from '../atm.typography';
import { createCardStrings } from './create-card.strings';

interface CardFormProps {
  onSubmit: (data: CreateCardSchema) => void;
  loading: boolean;
  serverError: string | null;
}

const CardForm = ({ loading, onSubmit, serverError }: CardFormProps) => {
  const form = useForm<CreateCardSchema>({
    resolver: zodResolver(createCardSchema),
    defaultValues: { name: '' },
  });

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-x-small w-full px-2x-small'>
        <FormField
          control={form.control}
          name='name'
          render={({ field, fieldState }) => (
            <FormItem>
              <FormControl>
                <TextInput
                  label={createCardStrings.label}
                  placeholder={createCardStrings.placeholder}
                  variant={fieldState.error ? 'error' : 'default'}
                  {...field}
                  caption={fieldState.error?.message}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type='submit' variant='primary' loading={loading} disabled={loading}>
          {createCardStrings.createCard}
        </Button>
        {serverError && <InputCaption>{serverError}</InputCaption>}
      </form>
    </Form>
  );
};

export default CardForm;
