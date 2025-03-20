import { useState } from 'react';
import { Modal } from '../atm.modal';
import { useCreateBoard } from '@/app/domain/boards/create-board.use-case';
import { BoardInput } from '@/app/data/graphql/generated';
import { Add } from '../assets/icons';
import { Text } from '../atm.typography';
import { createBoardStrings } from './create-board.strings';
import { BoardForm } from '../atm.board-form';

export interface CreateBoardProps {
  onCreate: () => void;
}

const CreateBoard = ({ onCreate }: CreateBoardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const { createBoard, loading } = useCreateBoard({
    onCompleted: () => {
      setServerError(null);
      setIsModalOpen(false);
      onCreate();
    },
    onError: (error) => {
      setServerError(error.message);
    },
  });

  const handleSubmit = (data: BoardInput) => {
    setServerError(null);
    createBoard({ data });
  };

  return (
    <>
      <div
        className='cursor-pointer rounded-large p-small flex flex-col items-center'
        onClick={() => setIsModalOpen(true)}
      >
        <div className='w-full h-3x-large flex flex-col gap-2x-small justify-center items-center'>
          <Add />
          <Text variant='link'>{createBoardStrings.button.createProject}</Text>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <BoardForm onSubmit={handleSubmit} loading={loading} serverError={serverError} />
      </Modal>
    </>
  );
};

export default CreateBoard;
