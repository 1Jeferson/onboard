import { DeleteCardDocument, DeleteCardMutation, DeleteCardMutationVariables } from '@/app/data/graphql/generated';
import { useMutation } from '@apollo/client';

export const useDeleteCard = ({
  onCompleted,
  onError,
}: {
  onCompleted?: (data: DeleteCardMutation) => void;
  onError?: (error: Error) => void;
}) => {
  const [deleteCardMutation, { loading }] = useMutation<DeleteCardMutation, DeleteCardMutationVariables>(
    DeleteCardDocument,
    {
      onCompleted,
      onError,
    },
  );

  const deleteCard = (variables: DeleteCardMutationVariables) => {
    deleteCardMutation({ variables });
  };

  return { deleteCard, loading };
};
