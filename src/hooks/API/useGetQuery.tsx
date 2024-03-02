/* eslint-disable @tanstack/query/exhaustive-deps */
import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import apiClient from '../../configs/apiClient';
import { TENANT_HEADER } from '../../configs/endpoints';
import { QueryParams } from '../../types/ReactQuery';

const getAPI = async (url: string, businessId: number, params?: QueryParams, token?: string) => {
  if (token) {
    apiClient.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete apiClient.defaults.headers.common['Authorization'];
  }
  apiClient.defaults.headers.common[TENANT_HEADER] = businessId;
  console.log('--------params', params, url);
  const { data } = await apiClient.get(url, { params });
  return data.response.data;
};

export const useGetQuery = <TData = unknown, TError = unknown>(
  queryKey: UseQueryOptions<TData, TError>['queryKey'],
  url: string,
  params?: QueryParams,
  isToken = true,
  options?: Omit<UseQueryOptions<TData, TError>, 'queryKey' | 'queryFn'>
) => {
  return useQuery<TData, TError>({
    queryKey,
    queryFn: async () => {
      let token = '';
      const businessId = 1;
      if (isToken) {
        token = 'ABCDdasdasdsad';
      }
      return await getAPI(url, businessId, params, token);
    },
    ...options,
  });
};
