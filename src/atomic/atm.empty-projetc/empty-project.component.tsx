import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { homeStrings } from '@/app/modules/home/home.strings';
import { Placeholder } from '../assets/icons';
import { Text } from '../atm.typography';
import { Button } from '../atm.button';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { BoardInput } from '@/app/data/graphql/generated';
import { createBoardSchema } from '@/app/modules/board/board.schema';
import { useCreateBoard } from '@/app/domain/auth/create-board.use-case';
import { TextInput } from '../atm.text-input';
import { InputCaption } from '../atm.typography';
import { boardStrings } from '@/app/modules/board/board.strings';
import { Modal } from '../atm.modal';

const EmptyProject = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const form = useForm<BoardInput>({
    resolver: zodResolver(createBoardSchema),
    defaultValues: { name: '' },
  });

  const { createBoard, loading } = useCreateBoard({
    onCompleted: () => {
      setServerError(null);
      setIsModalOpen(false);
      form.reset();
    },
    onError: (error) => {
      setServerError(error.message);
    },
  });

  const onSubmit = (data: BoardInput) => {
    setServerError(null);
    createBoard({ data });
  };

  return (
    <div className='flex flex-col items-center py-3x-large gap-medium'>
      <Placeholder />
      <div className='text-center flex flex-col gap-2x-small'>
        <Text variant='h3'>{homeStrings.noProject}</Text>
        <Text variant='b1'>{homeStrings.noProjectCreated}</Text>
      </div>

      <div>
        <Button variant='cta' onClick={() => setIsModalOpen(true)}>
          {homeStrings.button.createProject}
        </Button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col gap-x-small w-full px-2x-small'>
            <FormField
              control={form.control}
              name='name'
              render={({ field, fieldState }) => (
                <FormItem>
                  <FormControl>
                    <TextInput
                      label={boardStrings.nameLabel}
                      placeholder={boardStrings.namePlaceholder}
                      variant={fieldState.error ? 'error' : 'default'}
                      {...field}
                      caption={fieldState.error?.message}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type='submit' variant='primary' loading={loading} disabled={loading}>
              {homeStrings.button.createProject}
            </Button>
            {serverError && <InputCaption>{serverError}</InputCaption>}
          </form>
        </Form>
      </Modal>
    </div>
  );
};

export default EmptyProject;
