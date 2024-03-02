import MenuForm from './MenuForm';
import { IMenuRequest, Option } from '../../../types/MenuManager/menu';

interface MenuCreateProps {
  readonly handleCreateMenu: (menu: IMenuRequest) => void;
  readonly categories: Option[];
}

export default function MenuCreate({ handleCreateMenu, categories }: MenuCreateProps) {
  return <MenuForm handleCreateMenu={handleCreateMenu} categories={categories} />;
}
