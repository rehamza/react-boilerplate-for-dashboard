import { useQueryClient } from '@tanstack/react-query';
import MenuUI from './../../../components/MenuManager/Menu';
import { useGetQuery } from '../../../hooks/API/useGetQuery';
import { useDeleteMutation } from '../../../hooks/API/useDeleteMutation';
import { useCreateMutation } from '../../../hooks/API/useCreateMutation';
import { endpoints, queryKey as queryKeyValue } from '../../../configs/endpoints';
import { IMenu, IMenuResponse } from '../../../types/MenuManager/menu';
import Loader from '../../../components/Shared/Loader';
import ErrorMessage from '../../../components/ErrorMessage';
import { message, errorMessage } from '../../../constants/messages';
import { QueryParams } from '../../../types/ReactQuery';
import { useMemo, useState } from 'react';

export default function Menus() {
  const queryClient = useQueryClient();
  const [filterParams, setFilterParams] = useState<QueryParams>({});

  const queryKey = useMemo(() => {
    return [queryKeyValue.menuManager.menu.Menus, filterParams];
  }, [filterParams]);

  const {
    data: list,
    error,
    isLoading,
  } = useGetQuery<IMenuResponse>(queryKey, endpoints.menuManager.menu.list, filterParams, false);
  const menus = list?.menus;
  // const totalCount = list?.totalCount;

  const { mutate: deleteMenu } = useDeleteMutation(endpoints.menuManager.menu.delete, false, {
    onSuccess: (data) => {
      console.log(message.MENU.REMOVE_MENU, data);
      queryClient.refetchQueries({ queryKey: [queryKeyValue.menuManager.menu.Menus] });
    },
    onError: (error) => {
      console.error(errorMessage.REMOVE_ERROR, error);
    },
  });

  const handleDeleteMenu = (id: number) => {
    if (id) {
      deleteMenu(id);
    }
  };

  const { mutate: rearrangeMenu } = useCreateMutation(endpoints.menuManager.menu.rearrange, false, {
    onSuccess: (data) => {
      console.log(message.MENU.REARRANGE_MENU, data);
      queryClient.refetchQueries({ queryKey: [queryKeyValue.menuManager.menu.Menus] });
    },
    onError: (error) => {
      console.error(errorMessage.REARRANGE_ERROR, error);
    },
  });

  const handleRearrangeMenu = (menus: IMenu[]) => {
    if (menus?.length > 0) rearrangeMenu({ menus });
  };

  const handleRefetch = (filterParams: QueryParams) => {
    setFilterParams(filterParams);
  };

  if (isLoading) {
    return <Loader maxWidth={'6rem'} />;
  }

  if (error) {
    const errorMessage = (error as any).message || error;
    return <ErrorMessage>{errorMessage}</ErrorMessage>;
  }

  return (
    <MenuUI
      menus={menus}
      handleDeleteMenu={handleDeleteMenu}
      handleRefetch={handleRefetch}
      handleRearrangeMenu={handleRearrangeMenu}
    />
  );
}
