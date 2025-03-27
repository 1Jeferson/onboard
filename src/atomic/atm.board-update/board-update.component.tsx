import { useState } from 'react';
import { Modal } from '../atm.modal';
import { useUpdateBoard } from '@/app/domain/boards/update-board.use-case';
import { BoardInput } from '@/app/data/graphql/generated';
import { UpdateBoardForm } from '../atm.update-board-form';
import { toast } from 'sonner';
import { createBoardStrings } from '../atm.create-board/create-board.strings';

interface BoardUpdateProps {
  id: string;
  name: string;
  isOpen: boolean;
  onClose: () => void;
}

const BoardUpdate = ({ id, name, isOpen, onClose }: BoardUpdateProps) => {
  const [serverError, setServerError] = useState<string | null>(null);

  const { updateBoard, loading } = useUpdateBoard({
    onCompleted: () => {
      toast.success(createBoardStrings.updateMessage);
      onClose();
    },
    onError: () => {
      toast.error(createBoardStrings.errorUpdateMessage);
    },
  });

  const handleSubmit = (data: BoardInput) => {
    updateBoard({
      data: {
        id,
        name: data.name,
      },
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <UpdateBoardForm loading={loading} onSubmit={handleSubmit} serverError={serverError} initialData={{ name }} />
    </Modal>
  );
};

export default BoardUpdate;
