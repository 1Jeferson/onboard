import { useUpdateCard } from '@/app/domain/cards/update-card-use-case';
import { updateCardSchema, UpdateCardSchema } from '@/app/modules/board/board.schema';
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { Button } from '../atm.button';
import { Modal } from '../atm.modal';
import { TextInput } from '../atm.text-input';
import { InputCaption } from '../atm.typography';
import { updateCardStrings } from './update-card.strings';

interface UpdateCardProps {
  isOpen: boolean;
  onClose: () => void;
  initialData: UpdateCardSchema;
}

const UpdateCard = ({ isOpen, onClose, initialData }: UpdateCardProps) => {
  const form = useForm<UpdateCardSchema>({
    resolver: zodResolver(updateCardSchema),
    defaultValues: initialData,
  });
  const [serverError] = useState<string | null>(null);
  const { updateCard, loading } = useUpdateCard({
    onCompleted: () => {
      toast.success(updateCardStrings.success);
      onClose();
    },
    onError: (error) => {
      console.log(error);

      toast.error(updateCardStrings.error);
    },
  });

  const handleSubmit = (data: UpdateCardSchema) => {
    updateCard({ data });
  };
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className='flex flex-col gap-x-small w-full px-2x-small'>
          <FormField
            control={form.control}
            name='name'
            render={({ field, fieldState }) => (
              <FormItem>
                <FormControl>
                  <TextInput
                    label={updateCardStrings.label}
                    placeholder={updateCardStrings.placeholder}
                    variant={fieldState.error ? 'error' : 'default'}
                    {...field}
                    caption={fieldState.error?.message}
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type='submit' variant='primary' loading={loading} disabled={loading}>
            {updateCardStrings.button}
          </Button>
          {serverError && <InputCaption>{serverError}</InputCaption>}
        </form>
      </Form>
    </Modal>
  );
};

export default UpdateCard;
