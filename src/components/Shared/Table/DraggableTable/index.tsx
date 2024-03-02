import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import { BoxComponent, TypographyComponent, BaseIconButton } from '../../../UILib';
import React, { useState } from 'react';
import { DragIndicatorIcon, MoreHorizIcon } from '../../../../assets/Icons';
import PopUp from '../../Popup/Index';
import theme from '../../../../../../../../apps/portal/dashboard/src/theme/theme';
import { Close } from '@mui/icons-material';

interface DraggedItem {
  dragIndex: number;
  dragData: any;
}

interface Actions {
  name: any;
  action: (id: number) => void;
}

interface Column {
  title: string;
  field: string | object;
}

interface DraggableTabelProps {
  data: Array<any>;
  setState: React.Dispatch<React.SetStateAction<any>>;
  readonly handleRearrangeData?: (rearrangeData: any) => void; // TODO: optional for now but it should change
  columns: Column[];
  actions?: Actions[];
  hasHeader?: boolean;
  isList?: boolean;
}

export const style = {
  menuList: {
    '& .mui-3dzjca-MuiPaper-root-MuiPopover-paper-MuiMenu-paper': {
      left: '30px',
    },
  },
  tabelCell: {
    '& .mui-1ff6gxb-MuiTableCell-root': {
      borderBottom: 'none',
      paddingY: '9px',
    },
  },
};
const DragableTabel: React.FC<DraggableTabelProps> = ({
  data,
  setState,
  handleRearrangeData,
  columns,
  actions,
  hasHeader = true,
  isList = false,
}) => {
  const [draggedItem, setDraggedItem] = useState<DraggedItem | null>(null);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [list, setList] = useState<any>(data);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>, index: number) => {
    setAnchorEl(event.currentTarget);
    setSelectedIndex(index);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedIndex(null);
  };
  // Function triggered when a draggable element is being dragged
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>, dragIndex: number) => {
    // Set the draggedItem state with the index and item of the dragged element
    setDraggedItem({ dragIndex, dragData: list[dragIndex] });

    // Set the drag-and-drop effect to 'move'
    event.dataTransfer.effectAllowed = 'move';
  };

  // Function triggered when a draggable element is dropped onto a drop target
  const handleDrop = (event: React.DragEvent<HTMLDivElement>, dropIndex: number) => {
    event.preventDefault();

    if (draggedItem) {
      const { dragIndex, dragData } = draggedItem;

      // If the item is moved to its current position, do nothing
      if (dragIndex === dropIndex) {
        return;
      }

      const newData = [...list];

      // Adjust sortOrder for all items between dragIndex and dropIndex

      if (dragIndex < dropIndex) {
        // Moving an item forward in the list, decrement sortOrder for items in between
        Array.from({ length: dropIndex - dragIndex }).forEach((_, i) => {
          const currentIndex = dragIndex + i;
          newData[currentIndex] = { ...newData[currentIndex + 1], sortOrder: newData[currentIndex].sortOrder };
        });
      } else {
        // Moving an item backward in the list, increment sortOrder for items in between
        Array.from({ length: dragIndex - dropIndex }).forEach((_, i) => {
          const currentIndex = dragIndex - i;
          newData[currentIndex] = { ...newData[currentIndex - 1], sortOrder: newData[currentIndex].sortOrder };
        });
      }

      // Set the moved item's new sortOrder
      newData[dropIndex] = { ...dragData, sortOrder: newData[dropIndex].sortOrder };

      // Since we've directly manipulated sortOrder for simplicity,
      newData.forEach((item, index) => {
        item.sortOrder = index + 1;
      });

      // Update state and optional rearrange handler
      setList(newData);
      handleRearrangeData?.(newData);
      setDraggedItem(null);
    }
  };

  // Function triggered when the drag operation is completed (dragging ends)
  const handleDragEnd = () => {
    // Clear the draggedItem state as the drag operation is complete
    setDraggedItem(null);
  };

  const handleDelete = (id: number) => {
    setState(data.filter((item) => item.id !== id));
  };

  const handleListDelete = (index: number) => {
    setState(
      data.filter((item, i) => {
        console.log(item);
        if (i !== index) {
          return item;
        }
      })
    );
  };

  return (
    <TableContainer sx={{ borderStartStartRadius: '25px', borderEndStartRadius: '25px' }}>
      <Table>
        {hasHeader ? (
          <TableHead>
            <TableRow>
              {columns.map((columnName, index) => (
                <TableCell key={index} sx={{ fontSize: 18, fontWeight: 600 }}>
                  {columnName.title}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        ) : (
          <></>
        )}

        <TableBody>
          {data.map((row, index) => (
            <TableRow
              sx={{
                position: 'relative',
                bgcolor: 'white.150',
                '&::before': isList
                  ? {
                      content: '""',
                      position: 'absolute',
                      height: '100%',
                      width: '25px',
                      bgcolor: theme.palette.primary.main,
                      borderStartStartRadius: '25px',
                      borderEndStartRadius: '25px',
                      zIndex: '10',
                    }
                  : {},
                ...style.tabelCell,
              }}
              key={row.id}
              draggable
              onDragStart={(e) => handleDragStart(e, index)}
              onDrop={(e) => handleDrop(e, index)}
              onDragOver={(e) => e.preventDefault()}
              onDragEnd={handleDragEnd}
            >
              {columns.map((column, colIndex) => (
                <TableCell sx={{ position: 'relative', paddingX: '2rem' }}>
                  {!hasHeader && (
                    <BaseIconButton
                      sx={{ position: 'absolute', top: '0', right: '0' }}
                      onClick={!isList ? () => handleDelete(row.id) : () => handleListDelete(index)}
                    >
                      <Close />
                    </BaseIconButton>
                  )}
                  {typeof column.field === 'string' ? (
                    <BoxComponent sx={{ display: 'flex', alignItems: 'center' }}>
                      {colIndex === 0 && (
                        <>
                          <BoxComponent
                            sx={{
                              width: '15px',
                              borderBottomLeftRadius: '10px',
                              borderTopLeftRadius: '10px',
                              // justifyContent: 'space-between',
                              // alignItems: 'center',
                              // display: 'flex',
                              bgcolor: 'customGreen.300',
                              // marginBottom: 2,
                              height: '40px',
                            }}
                          />
                          <DragIndicatorIcon style={{ cursor: 'grab' }} />
                        </>
                      )}
                      <TypographyComponent variant="h6">{row[column.field] as string}</TypographyComponent>
                    </BoxComponent>
                  ) : (
                    <BoxComponent
                      sx={{
                        width: '100%',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                    >
                      {Object.keys(column.field).map((value, index) => (
                        <>
                          {!Array.isArray(row[value]) ? (
                            <TypographyComponent
                              sx={{
                                color:
                                  index === 0 || index === Object.keys(column.field).length + 1
                                    ? theme.palette.grey[500]
                                    : 'black',
                              }}
                              key={index}
                              variant="h6"
                            >
                              {row[value]}
                            </TypographyComponent>
                          ) : (
                            <TypographyComponent
                              sx={{
                                color: theme.palette.grey[500],
                                fontSize: '16px',
                              }}
                              key={index}
                            >
                              {row[value].join(', ')}
                            </TypographyComponent>
                          )}
                        </>
                      ))}
                    </BoxComponent>
                  )}
                </TableCell>
              ))}
              {actions && (
                <TableCell sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                  <BaseIconButton onClick={(e) => handleMenuOpen(e, index)}>
                    <MoreHorizIcon />
                  </BaseIconButton>
                  <PopUp
                    anchorEl={anchorEl}
                    selectedIndex={selectedIndex}
                    handleMenuClose={handleMenuClose}
                    actions={actions}
                    index={index}
                    data={row.id}
                  />
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DragableTabel;
