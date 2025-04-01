import { useMutation } from '@apollo/client';
import {
  UpdateCardOrderDocument,
  UpdateCardOrderMutation,
  UpdateCardOrderMutationVariables,
} from '@/app/data/graphql/generated';

export const useUpdateCardOrder = ({
  onCompleted,
  onError,
}: {
  onCompleted?: (data: UpdateCardOrderMutation) => void;
  onError?: (error: Error) => void;
}) => {
  const [updateCardOrderMutation, { loading }] = useMutation<UpdateCardOrderMutation, UpdateCardOrderMutationVariables>(
    UpdateCardOrderDocument,
    {
      onCompleted,
      onError,
    },
  );

  const updateCardOrder = (variables: UpdateCardOrderMutationVariables) => {
    updateCardOrderMutation({ variables });
  };

  return { updateCardOrder, loading };
};
