import { useNavigate } from 'react-router-dom';
import MenuCreateUI from '../../../components/MenuManager/Menu/Create';
import { useCreateMutation } from '../../../hooks/API/useCreateMutation';
import { endpoints, queryKey } from '../../../configs/endpoints';
import { message, errorMessage } from '../../../constants/messages';
import { IMenuRequest } from '../../../types/MenuManager/menu';
import routesPath from '../../../configs/routesPath';
import { useGetQuery } from '../../../hooks/API/useGetQuery';
import { ICategoryResponse } from '../../../pages/MenuManger/Category/category.types';
import ErrorMessage from '../../../components/ErrorMessage';
import Loader from '../../../components/Shared/Loader';
interface Option {
  value: number;
  label: string;
}
export default function MenuCreate() {
  const navigate = useNavigate();
  const { mutate: createMenu } = useCreateMutation(endpoints.menuManager.menu.create, false, {
    onSuccess: (data) => {
      console.log(message.MENU.CREATE_MENU, data);
      navigate(routesPath.menuManager.menu.menus);
    },
    onError: (error) => {
      console.error(errorMessage.CREATE_ERROR, error);
    },
  });

  const handleCreateMenu = (menu: IMenuRequest) => {
    if (menu) createMenu(menu);
  };
  const {
    data: list,
    error,
    isLoading,
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

  if (isLoading) {
    return <Loader maxWidth={'6rem'} />;
  }

  if (error) {
    const errorMessage = (error as any).message || error;
    return <ErrorMessage>{errorMessage}</ErrorMessage>;
  }

  return <MenuCreateUI handleCreateMenu={handleCreateMenu} categories={options} />;
}
