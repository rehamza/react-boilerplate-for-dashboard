import { useMutation, UseMutationOptions } from '@tanstack/react-query';
import apiClient from '../../configs/apiClient';
import { TENANT_HEADER } from '../../configs/endpoints';

const deleteAPI = async (url: string, businessId: number, variables?: any, token?: string) => {
  if (token) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete apiClient.defaults.headers.common['Authorization'];
  }
  apiClient.defaults.headers.common[TENANT_HEADER] = businessId;
  console.log('variables------------', url, variables, businessId, token);
  const { data } = await apiClient.post(url, { id: variables });
  console.log('data---', data);
  return data?.response?.data;
};

export const useDeleteMutation = <TData = unknown, TError = unknown, TVariables = unknown>(
  url: string,
  isToken = true,
  options?: UseMutationOptions<TData, TError, TVariables>
) => {
  return useMutation<TData, TError, TVariables>({
    mutationFn: async (variables: TVariables) => {
      let token = '';
      const businessId = 1;
      if (isToken) {
        token = 'ABCDdasdasdsad';
      }
      return await deleteAPI(url, businessId, variables, token);
    },
    ...options,
  });
};
