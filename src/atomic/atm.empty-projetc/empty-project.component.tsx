import { useState } from 'react';
import { Placeholder } from '../assets/icons';
import { Text } from '../atm.typography';
import { Button } from '../atm.button';
import { Modal } from '../atm.modal';
import { useCreateBoard } from '@/app/domain/boards/create-board.use-case';
import { BoardInput } from '@/app/data/graphql/generated';
import { homeStrings } from '@/app/modules/home/home.strings';
import { createBoardStrings } from '../atm.create-board/create-board.strings';
import { CreateBoardProps } from '../atm.create-board/create-board.component';
import { BoardForm } from '../atm.board-form';

const EmptyProject = ({ onCreate }: CreateBoardProps) => {
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
    <div className='flex flex-col items-center py-3x-large gap-medium'>
      <Placeholder />
      <div className='text-center flex flex-col gap-2x-small'>
        <Text variant='h3'>{homeStrings.noProject}</Text>
        <Text variant='b1'>{homeStrings.noProjectCreated}</Text>
      </div>

      <div>
        <Button variant='cta' onClick={() => setIsModalOpen(true)}>
          {createBoardStrings.button.createProject}
        </Button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <BoardForm onSubmit={handleSubmit} loading={loading} serverError={serverError} />
      </Modal>
    </div>
  );
};

export default EmptyProject;
