// import { useQuery , useMutation} from '@tanstack/react-query';
// import apiClient from '../../../configs/apiClient';
// import { User } from '../../../types/User';

// /*  Query Section */

// type GetUserQueryParams = {
//   userId: string;
// };

// const QUERY_KEY = ['User'];

// const fetchMenu = async (params: GetUserQueryParams): Promise<User> => {
//   const { data } = await apiClient.get(`/menu/${params.userId}`);
//   return data;
// };

// export const useGetMenu = (params: GetUserQueryParams) => {
//   return useQuery<User, Error>(QUERY_KEY, () => fetchMenu(params));
// };

// /* Mutation section */
