import { useMutation } from '@apollo/client';
import { LoginMutation, LoginMutationVariables, LoginDocument } from '@/app/data/graphql/generated';
import { useAuthStore, useUserStore } from '@/app/store';

interface LoginUseCase {
  onCompleted: (data: LoginMutation) => void;
  onError: (error: Error) => void;
}

export const useLogin = ({ onCompleted, onError }: LoginUseCase) => {
  const { setUser } = useUserStore();
  const { setToken } = useAuthStore();

  const [loginMutation, { loading }] = useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, {
    onCompleted: (response) => {
      if (!response?.login) return;

      const { token, user } = response.login;

      if (token && user?.id && user?.name) {
        setUser({ id: user.id, name: user.name });
        setToken(token);
      }

      onCompleted(response);
    },
    onError: (err) => onError(err),
  });

  const login = (variables: LoginMutationVariables) => {
    if (loading) return;
    loginMutation({ variables });
  };

  return { login, loading };
};
