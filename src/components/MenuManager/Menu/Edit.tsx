import MenuForm from './MenuForm';
import { IMenuRequest, IMenuItemResponse, Option } from '../../../types/MenuManager/menu';
interface MenuCreateProps {
  readonly handleEditMenu: (menu: IMenuRequest) => void;
  readonly menuData: IMenuItemResponse | undefined;
  readonly categories: Option[];
  readonly menuId: number;
}

export default function MenuEdit({ handleEditMenu, menuData, categories, menuId }: MenuCreateProps) {
  return (
    <MenuForm
      handleEditMenu={handleEditMenu}
      selectedCategoriesData={menuData?.categories}
      categories={categories}
      onPremData={menuData?.onPrem}
      isEdit={true}
      offPremData={menuData?.offPrem}
      customVisibilityData={menuData?.custom}
      menu={menuData?.menu}
      menuId={menuId}
    />
  );
}
