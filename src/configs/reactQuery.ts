// queryClient.ts
import { QueryClient } from '@tanstack/react-query';
// import apiClient from './apiClient';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // retry: 3,
      // retryDelay: 1000,
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: true,
    },
    mutations: {
      onError: (error: Error) => {
        console.error('Mutation error:', error.message);
      },
      onSuccess: () => {
        console.log('Mutation successful');
      },
    },
  },
});

export default queryClient;
