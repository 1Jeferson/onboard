import {
  CreateUserDocument,
  CreateUserMutation,
  CreateUserMutationVariables,
  MutationCreateUserArgs,
} from '@/app/data/graphql/generated';
import { useAuthStore, useUserStore } from '@/app/store';
import { useMutation } from '@apollo/client';

export const useRegister = ({
  onCompleted,
  onError,
}: {
  onCompleted: (data: CreateUserMutation) => void;
  onError: (error: Error) => void;
}) => {
  const { setUser } = useUserStore();
  const { setToken } = useAuthStore();

  const [registerMutation, { loading }] = useMutation<CreateUserMutation, MutationCreateUserArgs>(CreateUserDocument, {
    onCompleted: (response) => {
      if (!response?.createUser) return;

      const { token, user } = response.createUser;

      if (token && user?.id && user?.name) {
        setUser({ id: user.id, name: user.name });
        setToken(token);
      }
      onCompleted(response);
    },
    onError: (err) => onError(err),
  });

  const register = (variables: CreateUserMutationVariables) => {
    if (loading) return;
    registerMutation({ variables });
  };

  return { register, loading };
};
