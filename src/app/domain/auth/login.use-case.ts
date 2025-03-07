import { useMutation } from '@apollo/client';
import { LoginMutation, LoginMutationVariables, LoginDocument } from '@/app/data/graphql/generated';

interface LoginUseCase {
  onCompleted?: (data?: LoginMutation) => void;
  onError?: (error: Error) => void;
}

export const useLogin = ({ onCompleted, onError }: LoginUseCase) => {
  const [loginMutation, { loading }] = useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, {
    onCompleted: (response) => onCompleted?.(response),
    onError: (err) => onError?.(err),
  });
  const login = (variables: LoginMutationVariables) => {
    if (loading) return;

    loginMutation({ variables });
  };
  return { login, loading };
};
