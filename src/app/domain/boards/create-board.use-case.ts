import { CreateBoardDocument, CreateBoardMutation, CreateBoardMutationVariables } from '@/app/data/graphql/generated';
import { useMutation } from '@apollo/client';

export const useCreateBoard = ({
  onCompleted,
  onError,
}: {
  onCompleted?: (data: CreateBoardMutation) => void;
  onError?: (error: Error) => void;
}) => {
  const [createBoardMutation, { loading }] = useMutation<CreateBoardMutation, CreateBoardMutationVariables>(
    CreateBoardDocument,
    {
      onCompleted,
      onError,
    },
  );

  const createBoard = (variables: CreateBoardMutationVariables) => {
    createBoardMutation({ variables });
  };

  return { createBoard, loading };
};
