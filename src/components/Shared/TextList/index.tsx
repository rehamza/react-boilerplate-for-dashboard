import { ListItem, ListItemText } from '@mui/material';
import { BaseList } from '../../UILib';
import theme from '../../../theme/theme';

export interface TextListProps {
  columns?: string[];
  displayField: string;
  listData: any;
  selectedItems: any;
  setSelectedItems: (items: any) => void;
}

export default function TextList({
  displayField,
  listData,
  columns,
  selectedItems,
  setSelectedItems,
  ...otherProps
}: TextListProps) {
  function handleListItemSelection(item: any) {
    if (!selectedItems.find((object: any) => object.id === item.id)) {
      setSelectedItems([...selectedItems, item]);
    } else {
      setSelectedItems(selectedItems.filter((currItem: any) => currItem.id !== item.id));
    }
  }

  return (
    <BaseList {...otherProps}>
      {listData.map((item: any, index: number) => (
        <>
          {selectedItems.find((object: any) => object[displayField] === item[displayField]) ? (
            <ListItem
              sx={{
                display: columns && columns.length > 0 ? 'flex' : 'block',
                justifyContent: columns && columns.length > 0 ? 'space-between' : null,
                alignItems: columns && columns.length > 0 ? 'center' : null,
                borderTop: `1px solid ${theme.palette.grey[300]}`,
                paddingX: '2rem',
                bgcolor: 'white.150',
                '&:hover': { cursor: 'pointer' },
              }}
              key={index}
              onClick={() => handleListItemSelection(item)}
            >
              {columns && columns.length > 0 ? (
                columns.map((column, index) => (
                  <ListItemText
                    sx={{ '&.MuiListItemText-root': { maxWidth: 'fit-content' } }}
                    key={index}
                    primary={item[column]}
                    primaryTypographyProps={{ fontSize: '16px' }}
                  />
                ))
              ) : (
                <ListItemText primary={item[displayField]} primaryTypographyProps={{ fontSize: '16px' }} />
              )}
            </ListItem>
          ) : (
            <ListItem
              sx={{
                display: columns && columns.length > 0 ? 'flex' : 'block',
                justifyContent: columns && columns.length > 0 ? 'space-between' : null,
                alignItems: columns && columns.length > 0 ? 'center' : null,
                borderTop: `1px solid ${theme.palette.grey[300]}`,
                paddingX: '2rem',
                '&:hover': { bgcolor: 'white.150', cursor: 'pointer' },
                '&.MuiListItemText-root': { maxWidth: 'fit-content' },
              }}
              key={index}
              onClick={() => handleListItemSelection(item)}
            >
              {columns && columns?.length > 0 ? (
                columns.map((column, index) => (
                  <ListItemText
                    sx={{ '&.MuiListItemText-root': { maxWidth: 'fit-content' } }}
                    key={index}
                    primary={item[column]}
                    primaryTypographyProps={{
                      fontSize: '16px',
                      color: index + 1 === columns?.length ? theme.palette.grey[500] : 'black',
                    }}
                  />
                ))
              ) : (
                <ListItemText primary={item[displayField]} primaryTypographyProps={{ fontSize: '16px' }} />
              )}
            </ListItem>
          )}
        </>
      ))}
    </BaseList>
  );
}
