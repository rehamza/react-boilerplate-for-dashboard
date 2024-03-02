'use client';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { Table } from '@mui/material';
import { style } from './basetable.style';

export const BaseTable = ({
  tableCells,
  rows,
}: {
  rows: {
    desc: string;
    qty: number;
    unit: number;
  }[];
  tableCells: {
    label: string;
    align: string;
  }[];
}) => {
  return (
    <div>
      <TableContainer>
        <Table aria-label="spanning table">
          <TableHead>
            <TableRow>
              {tableCells?.map((cell, index) => (
                <TableCell key={index} sx={style.it}>
                  {cell.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody sx={style.tableBody}>
            {rows?.map((row, rowIndex) => {
              return (
                <TableRow key={rowIndex}>
                  {Object?.values(row)?.map((value, cellIndex) => (
                    <TableCell key={cellIndex} sx={style.it}>
                      {value}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};
