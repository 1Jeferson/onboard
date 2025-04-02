import { CreateCardDocument, CreateCardMutation, CreateCardMutationVariables } from '@/app/data/graphql/generated';
import { useMutation } from '@apollo/client';

export const useCreateCard = ({
  onCompleted,
  onError,
}: {
  onCompleted?: (data: CreateCardMutation) => void;
  onError?: (error: Error) => void;
}) => {
  const [createCardMutation, { loading }] = useMutation<CreateCardMutation, CreateCardMutationVariables>(
    CreateCardDocument,
    {
      onCompleted,
      onError,
    },
  );

  const createCard = (variables: CreateCardMutationVariables) => {
    createCardMutation({ variables });
  };

  return { createCard, loading };
};
