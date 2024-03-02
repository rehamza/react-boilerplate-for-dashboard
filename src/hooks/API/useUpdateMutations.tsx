import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import apiClient from '../../configs/apiClient';
import { TENANT_HEADER } from '../../configs/endpoints';

const updateAPI = async (url: string, businessId: number, variables?: any, token?: string) => {
  if (token) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete apiClient.defaults.headers.common['Authorization'];
  }
  apiClient.defaults.headers.common[TENANT_HEADER] = businessId;
  const { data } = await apiClient.put(url, variables);
  return data;
};

export const useUpdateMutation = <TData = unknown, TError = unknown, TVariables = unknown>(
  url: string,
  isToken?: boolean,
  options?: UseMutationOptions<TData, TError, TVariables>
) => {
  return useMutation<TData, TError, TVariables>({
    mutationFn: async (variables: TVariables) => {
      let token = '';
      const businessId = 1;
      if (isToken) {
        token = 'ABCDdasdasdsad';
      }
      return await updateAPI(url, businessId, variables, token);
    },
    ...options,
  });
};

{
  /* Examples how we call the APIs
  
  const updateMutation = useUpdateMutation('/your-endpoint', isToken , {
    onSuccess: () => {
      // Handle successful update
    },
    onError: (error) => {
      // Handle error
    },
  }); */
}
