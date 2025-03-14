import { useMutation } from '@apollo/client';
import { LoginMutation, LoginMutationVariables, LoginDocument } from '@/app/data/graphql/generated';
import { useAuthStore, useUserStore } from '@/app/store';

export const useLogin = ({
  onCompleted,
  onError,
}: {
  onCompleted?: (data: LoginMutation) => void;
  onError?: (error: Error) => void;
}) => {
  const { setUser } = useUserStore();
  const { setToken } = useAuthStore();

  const [loginMutation, { loading }] = useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, {
    onCompleted: (response) => {
      if (!response?.login) return;

      const { token, user } = response.login;

      setUser({ id: user.id, name: user.name });
      setToken(token);

      onCompleted?.(response);
    },
    onError,
  });

  const login = (variables: LoginMutationVariables) => {
    if (loading) return;
    loginMutation({ variables });
  };

  return { login, loading };
};
