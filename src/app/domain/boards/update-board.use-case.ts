import { useMutation } from '@apollo/client';
import { UpdateBoardDocument, UpdateBoardMutation, UpdateBoardMutationVariables } from '@/app/data/graphql/generated';

export const useUpdateBoard = ({
  onCompleted,
  onError,
}: {
  onCompleted?: (data: UpdateBoardMutation) => void;
  onError?: (error: Error) => void;
}) => {
  const [updateBoardMutation, { loading }] = useMutation<UpdateBoardMutation, UpdateBoardMutationVariables>(
    UpdateBoardDocument,
    {
      onCompleted,
      onError,
    },
  );

  const updateBoard = (variables: UpdateBoardMutationVariables) => {
    updateBoardMutation({ variables });
  };

  return { updateBoard, loading };
};
