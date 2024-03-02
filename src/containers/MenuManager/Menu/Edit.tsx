import { useNavigate } from 'react-router-dom';
import { useQueryClient } from '@tanstack/react-query';
import { useLocation } from 'react-router-dom';
import MenuEditUI from '../../../components/MenuManager/Menu/Edit';
import { useUpdateMutation } from '../../../hooks/API/useUpdateMutations';
import { message, errorMessage } from '../../../constants/messages';
import { IMenuRequest, Option } from '../../../types/MenuManager/menu';
import Loader from '../../../components/Shared/Loader';
import ErrorMessage from '../../../components/ErrorMessage';
import { IMenuItemResponse } from '../../../types/MenuManager/menu';
import { endpoints, queryKey } from '../../../configs/endpoints';
import { useGetQuery } from '../../../hooks/API/useGetQuery';
import routesPath from '../../../configs/routesPath';
import { ICategoryResponse } from '../../../pages/MenuManger/Category/category.types';

export default function MenuEdit() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { id: menuId } = location.state;
  const {
    data: menuData,
    error,
    isLoading,
  } = useGetQuery<IMenuItemResponse>(
    [queryKey.menuManager.menu.Menu],
    endpoints.menuManager.menu.menuItem,
    { id: menuId },
    false
  );
  const { mutate: updateMenu } = useUpdateMutation(endpoints.menuManager.menu.edit, false, {
    onSuccess: (data) => {
      console.log(message.MENU.UPDATE_MENU, data);
      queryClient.refetchQueries({ queryKey: [queryKey.menuManager.menu.Menus] });
      queryClient.refetchQueries({ queryKey: [queryKey.menuManager.menu.Menu] });
      navigate(routesPath.menuManager.menu.menus);
    },
    onError: (error) => {
      console.error(errorMessage.UPDATE_ERROR, error);
    },
  });

  const handleEditMenu = (menuData: IMenuRequest) => {
    if (menuData?.menu.id) {
      console.log('Menu----data', menuData);
      updateMenu(menuData);
    }
  };

  const {
    data: list,
    error: categoryListError,
    isLoading: isCategoryList,
  } = useGetQuery<ICategoryResponse>(
    [queryKey.menuManager.category.categories],
    endpoints.menuManager.category.list,
    {},
    false
  );
  let options: Option[] = [];
  if (list?.categories && list.categories.length > 0) {
    options = list.categories.map((category) => ({
      value: category.id || 0,
      label: category.categoryName,
    }));
  }

  console.log('Fetch Data:', list);

  if (isLoading || isCategoryList) {
    return <Loader maxWidth={'6rem'} />;
  }

  if (error) {
    const errorMessage = (error as any).message || error;
    return <ErrorMessage>{errorMessage}</ErrorMessage>;
  }

  if (categoryListError) {
    const errorMessage = (categoryListError as any).message || categoryListError;
    return <ErrorMessage>{errorMessage}</ErrorMessage>;
  }

  console.log('----------menuData--', menuData);

  return <MenuEditUI menuId={menuId} handleEditMenu={handleEditMenu} menuData={menuData} categories={options} />;
}
