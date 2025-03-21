import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { updateBoardSchema } from '@/app/modules/board/board.schema';
import { BoardInput } from '@/app/data/graphql/generated';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { TextInput } from '../atm.text-input';
import { Button } from '../atm.button';
import { InputCaption } from '../atm.typography';
import { createBoardStrings } from '../atm.create-board/create-board.strings';

interface UpdateBoardFormProps {
  onSubmit: (data: BoardInput) => void;
  loading: boolean;
  serverError: string | null;
  initialData: { name: string };
}

const UpdateBoardForm = ({ onSubmit, loading, serverError, initialData }: UpdateBoardFormProps) => {
  const form = useForm<BoardInput>({
    resolver: zodResolver(updateBoardSchema),
    defaultValues: initialData,
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
                  label={createBoardStrings.nameLabel}
                  placeholder={createBoardStrings.namePlaceholder}
                  variant={fieldState.error ? 'error' : 'default'}
                  {...field}
                  caption={fieldState.error?.message}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type='submit' variant='primary' loading={loading} disabled={loading}>
          {createBoardStrings.button.editProject}
        </Button>
        {serverError && <InputCaption>{serverError}</InputCaption>}
      </form>
    </Form>
  );
};

export default UpdateBoardForm;
