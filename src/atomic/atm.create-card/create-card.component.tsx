import { useState } from 'react';
import { Card, CardColumns } from '@/app/data/graphql/generated';
import { useCreateCard } from '@/app/domain/cards/create-card.use-case';
import { toast } from 'sonner';
import { Modal } from '../atm.modal';
import { CreateCardSchema } from '@/app/modules/board/board.schema';
import { CardForm } from '../atm.card-form';
import { createCardStrings } from '../atm.card-form/create-card.strings';

interface CreateCardProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: () => void;
  boardId: string;
  column: CardColumns;
  cards: Card[];
}

const CreateCard = ({ isOpen, onClose, onCreate, boardId, column, cards }: CreateCardProps) => {
  const [serverError, setServerError] = useState<string | null>(null);

  const { createCard, loading } = useCreateCard({
    onCompleted: () => {
      toast.success(createCardStrings.success);
      onClose();
      onCreate();
    },
    onError: () => {
      toast.error(createCardStrings.error);
    },
  });

  const handleSubmit = (data: CreateCardSchema) => {
    setServerError(null);

    const maxOrder = cards.length > 0 ? Math.max(...cards.map((card) => card.order || 0)) : 0;
    const nextOrder = maxOrder + 1;

    createCard({
      data: {
        name: data.name,
        boardId,
        column,
        order: nextOrder,
      },
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <CardForm onSubmit={handleSubmit} loading={loading} serverError={serverError} />
    </Modal>
  );
};

export default CreateCard;
