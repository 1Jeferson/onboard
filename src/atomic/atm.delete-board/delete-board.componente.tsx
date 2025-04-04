import { useDeleteBoard } from '@/app/domain/boards/delete-board.use-case';
import { Modal } from '../atm.modal';
import { Text } from '../atm.typography';
import { Button } from '../atm.button';
import { deleteBoardStrings } from './delete-board.strings';
import { toast } from 'sonner';

interface DeleteBoardProps {
  id: string;
  name: string;
  isOpen: boolean;
  onClose: () => void;
  refetch: () => void;
}

const BoardDelete = ({ id, isOpen, name, onClose, refetch }: DeleteBoardProps) => {
  const { deleteBoard, loading } = useDeleteBoard({
    onCompleted() {
      toast.success(deleteBoardStrings.success);
      refetch();
      onClose();
    },
    onError() {
      toast.error(deleteBoardStrings.error);
    },
  });

  const handleDelete = () => {
    deleteBoard({ boardId: id });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className='p-2x-small flex flex-col gap-small'>
        <Text variant='h2'>
          {deleteBoardStrings.deleteBoard}, {name}
        </Text>
        <Text variant='b1'>{deleteBoardStrings.deleteConfirmation}</Text>

        <div className='flex justify-end gap-small'>
          <Button variant='primaryDestructive' onClick={onClose} disabled={loading}>
            {deleteBoardStrings.cancel}
          </Button>
          <Button variant='primary' onClick={handleDelete} loading={loading}>
            {deleteBoardStrings.confirm}
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default BoardDelete;
