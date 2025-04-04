import { useQuery } from '@apollo/client';
import { BoardDocument, BoardQuery, BoardQueryVariables } from '@/app/data/graphql/generated';

export const useBoard = ({
  onCompleted,
  onError,
  variables,
}: {
  variables: BoardQueryVariables;
  onCompleted?: (data: BoardQuery) => void;
  onError?: (error: Error) => void;
}) => {
  const { data, loading, refetch } = useQuery<BoardQuery, BoardQueryVariables>(BoardDocument, {
    variables,
    onCompleted,
    onError,
  });

  return { data, loading, refetch };
};
