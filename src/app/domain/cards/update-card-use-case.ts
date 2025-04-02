import { useMutation } from '@apollo/client';
import { UpdateCardDocument, UpdateCardMutation, UpdateCardMutationVariables } from '@/app/data/graphql/generated';

export const useUpdateCard = ({
  onCompleted,
  onError,
}: {
  onCompleted?: (data: UpdateCardMutation) => void;
  onError?: (error: Error) => void;
}) => {
  const [updateCardMutation, { loading }] = useMutation<UpdateCardMutation, UpdateCardMutationVariables>(
    UpdateCardDocument,
    {
      onCompleted,
      onError,
    },
  );

  const updateCard = (variables: UpdateCardMutationVariables) => {
    updateCardMutation({ variables });
  };

  return { updateCard, loading };
};
