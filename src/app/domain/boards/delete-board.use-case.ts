import { DeleteBoardDocument, DeleteBoardMutation, DeleteBoardMutationVariables } from '@/app/data/graphql/generated';
import { useMutation } from '@apollo/client';

export const useDeleteBoard = ({
  onCompleted,
  onError,
}: {
  onCompleted?: (data: DeleteBoardMutation) => void;
  onError?: (error: Error) => void;
}) => {
  const [deleteBoardMutation, { loading }] = useMutation<DeleteBoardMutation, DeleteBoardMutationVariables>(
    DeleteBoardDocument,
    {
      onCompleted,
      onError,
    },
  );

  const deleteBoard = (variables: DeleteBoardMutationVariables) => {
    deleteBoardMutation({ variables });
  };

  return { deleteBoard, loading };
};
