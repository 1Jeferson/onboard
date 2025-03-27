import { useQuery } from '@apollo/client';
import { CardDocument, CardQuery, CardQueryVariables, CardColumns } from '@/app/data/graphql/generated';

export const useListCards = ({
  onCompleted,
  onError,
  variables,
}: {
  variables: CardQueryVariables & { column?: CardColumns };
  onCompleted?: (data: CardQuery) => void;
  onError?: (error: Error) => void;
}) => {
  const { data, loading } = useQuery<CardQuery, CardQueryVariables>(CardDocument, {
    variables,
    onCompleted,
    onError,
  });

  return { data, loading };
};
