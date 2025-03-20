import { useQuery } from '@apollo/client';
import { BoardsDocument, BoardsQuery, BoardsQueryVariables } from '@/app/data/graphql/generated';

export const useListBoards = ({
  onCompleted,
  onError,
  variables,
}: {
  variables: BoardsQueryVariables;
  onCompleted?: (data: BoardsQuery) => void;
  onError?: (error: Error) => void;
}) => {
  const { data, loading, refetch } = useQuery<BoardsQuery, BoardsQueryVariables>(BoardsDocument, {
    variables,
    onCompleted,
    onError,
  });

  return { boards: data?.boards, loading, refetch };
};
