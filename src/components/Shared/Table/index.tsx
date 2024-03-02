import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import { MoreHorizIcon } from '../../../assets/Icons';
import { BoxComponent, TypographyComponent, BaseIconButton } from '../../UILib';
import PopUp from '../Popup/Index';
import Chip from '../Chip';

interface Actions {
  name: any;
  action: (id: number) => void;
}
interface Column {
  title: string;
  field: string;
}

interface TabelProps {
  data: Array<any>;
  columns: Column[];
  actions: Actions[];
}

export const style = {
  tabelCell: {
    '& .mui-1ff6gxb-MuiTableCell-root': {
      borderBottom: 'none',
      paddingY: 2,
    },
  },
};

export default function Tabel({ data, actions, columns }: TabelProps) {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>, index: number) => {
    setAnchorEl(event.currentTarget);
    setSelectedIndex(index);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedIndex(null);
  };

  return (
    <TableContainer>
      <Table sx={style.tabelCell}>
        <TableHead>
          <TableRow>
            {columns.map((columnName, index) => (
              <TableCell key={index} sx={{ fontSize: 18, fontWeight: 600 }}>
                {columnName.title !== '' ? columnName.title : ''}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={row.id}>
              {columns.map((column, colIndex) => (
                <TableCell>
                  <BoxComponent
                    sx={{
                      width: '100%',
                      gap: 1,
                      alignItems: 'center',
                      display: 'flex',
                    }}
                  >
                    {colIndex === 0 ? (
                      <TypographyComponent key={colIndex} variant="h6">
                        {typeof row[column.field] === 'string'
                          ? row[column.field]
                          : row[column.field].map((menu: any) => menu['menuName'])}
                      </TypographyComponent>
                    ) : (
                      <>
                        {row[column.field] !== '' && typeof row[column.field] === 'string' ? (
                          <Chip key={index} label={row[column.field] ?? ''} variant="outlined" isDisabled={true} />
                        ) : (
                          row[column.field] !== '' &&
                          row[column.field].map((menu: any) => (
                            <Chip key={index} label={menu['menuName'] ?? ''} variant="outlined" isDisabled={true} />
                          ))
                        )}
                      </>
                    )}
                  </BoxComponent>
                </TableCell>
              ))}
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
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
