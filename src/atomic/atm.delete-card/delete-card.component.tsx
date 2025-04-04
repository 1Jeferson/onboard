import { useDeleteCard } from '@/app/domain/cards/delete-card.use-case';
import { Modal } from '../atm.modal';
import { toast } from 'sonner';
import { Text } from '../atm.typography';
import { Button } from '../atm.button';
import { deleteCardStrings } from './delete-card.strings';

interface DeleteCardProps {
  id: string;
  isOpen: boolean;
  onClose: () => void;
  refetch: () => void;
}

const DeleteCard = ({ id, isOpen, onClose, refetch }: DeleteCardProps) => {
  const { deleteCard, loading } = useDeleteCard({
    onCompleted() {
      toast.success(deleteCardStrings.success);
      refetch();
      onClose();
    },
    onError() {
      toast.error(deleteCardStrings.error);
    },
  });

  const handleDelete = () => {
    deleteCard({ cardId: id });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className='p-2x-small flex flex-col gap-small'>
        <Text variant='h2'>{deleteCardStrings.deleteCard}</Text>
        <Text variant='b1'>{deleteCardStrings.deleteConfirmation}</Text>

        <div className='flex justify-end gap-small'>
          <Button variant='primaryDestructive' onClick={onClose} disabled={loading}>
            {deleteCardStrings.cancel}
          </Button>
          <Button variant='primary' onClick={handleDelete} loading={loading}>
            {deleteCardStrings.confirm}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default DeleteCard;
