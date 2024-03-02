import { useState, ChangeEvent, useEffect } from 'react';
import { BasePaper, BoxComponent, DialogComponent } from '../../UILib';
import DragableTabel from '../../Shared/Table/DraggableTable';
import Tabel from '../../Shared/Table';
import TabelHeader from '../../Shared/Table/TableHeader';
import routesPath from '../../../configs/routesPath';
import { useNavigate } from 'react-router-dom';
import Delete from '../../Shared/Modal/Delete';
import { IMenu } from '../../../types/MenuManager/menu';
import { QueryParams } from '../../../types/ReactQuery';

// TODO: Interfaces will be removed from here //

interface Actions {
  name: any;
  action: (id: number) => void;
}

interface MenuProps {
  readonly menus: IMenu[] | undefined;
  readonly handleDeleteMenu: (id: number) => void;
  readonly handleRearrangeMenu: (id: IMenu[]) => void;
  readonly handleRefetch: (filterParams: QueryParams) => void;
}

interface Column {
  title: string;
  field: string;
}

export default function Menus({ menus, handleDeleteMenu, handleRearrangeMenu, handleRefetch }: MenuProps) {
  const columns: Column[] = [{ title: 'Menus Name', field: 'menuName' }];
  const [isTableDraggable, setIsTableDraggable] = useState(false);
  const [menuList, setMenuList] = useState<IMenu[] | undefined>(menus ?? []);
  const [rearrangeData, setRearrangeData] = useState<IMenu[]>([]);
  const navigate = useNavigate();
  const actions: Actions[] = [
    { name: 'Edit', action: (id) => handleEdit(id) },
    { name: 'Delete', action: (id) => handleDelete(id) },
  ];
  const [search, setSearch] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const [deleteSelectedId, setDeleteSelectedId] = useState<number | null>(null);

  useEffect(() => {
    setMenuList(menus);
  }, [menus]);

  const handleDelete = (id: number) => {
    setDeleteSelectedId(id);
    setOpen(true);
  };

  const handleEdit = (id: number) => {
    navigate(routesPath.menuManager.menu.edit, { state: { id } });
  };

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);

    if (value === '') {
      setMenuList(menus);
    } else {
      const filteredArray = menus?.filter((item) => item.menuName.toLowerCase().includes(value.toLowerCase()));

      setMenuList(filteredArray);
    }
  };

  const handleDeleteMenuItem = () => {
    console.log('Delete clicked');
    if (deleteSelectedId) handleDeleteMenu(deleteSelectedId);
    setOpen(false);
    setDeleteSelectedId(null);
  };

  const handleRearrangeData = (rearrangelist: Array<any>) => {
    setRearrangeData(rearrangelist);
  };
  const handleDone = () => {
    handleRearrangeMenu(rearrangeData);
    setIsTableDraggable(!isTableDraggable);
  };

  return (
    <>
      <BasePaper sx={{ px: '40px', py: '30px', height: '100%' }}>
        <TabelHeader
          isTableDraggable={isTableDraggable}
          search={search}
          handleSearch={handleSearch}
          handleDone={handleDone}
          createPath={routesPath.menuManager.menu.create}
          showDraggrable={true}
        />
        <BoxComponent sx={{ height: '60vh', overflowY: 'auto' }}>
          {menuList &&
            (isTableDraggable === false ? (
              <Tabel data={menuList} columns={columns} actions={actions} />
            ) : (
              <DragableTabel
                data={menuList}
                columns={columns}
                actions={actions}
                setState={setMenuList}
                handleRearrangeData={handleRearrangeData}
              />
            ))}
        </BoxComponent>
      </BasePaper>
      <DialogComponent open={open} fullWidth maxWidth="md" sx={{ borderRadius: 0 }}>
        <Delete open={open} setOpen={setOpen} handleDelete={handleDeleteMenuItem} subTitle="Do you want to proceed ?" />
      </DialogComponent>
    </>
  );
}
