import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('2 Classic Collection Garage Door, 2 Entry Door', "Johnson_Classic14209123", 'Russia Plant', 'Manoj Bajpayee', 4.0),
  createData('2 Classic Collection Garage Door, 2 Entry Door', "Johnson_Classic14209123", 'Russia Plant', 'Manoj Bajpayee', 4.0),
  createData('2 Classic Collection Garage Door, 2 Entry Door', "Johnson_Classic14209123", 'Russia Plant', 'Manoj Bajpayee', 4.0),
  createData('2 Classic Collection Garage Door, 2 Entry Door', "Johnson_Classic14209123", 'Russia Plant', 'Manoj Bajpayee', 4.0),
  createData('2 Classic Collection Garage Door, 2 Entry Door', "Johnson_Classic14209123", 'Russia Plant', 'Manoj Bajpayee', 4.0),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Product Information &nbsp; &#x2193;</StyledTableCell>
            <StyledTableCell align="right">Cart Name  &nbsp; &#x2193;</StyledTableCell>
            <StyledTableCell align="right">Shipping Point &nbsp; &#x2193;</StyledTableCell>
            <StyledTableCell align="right">Created by &nbsp; &#x2193;</StyledTableCell>
            <StyledTableCell align="right">Expiry &nbsp; &#x2193;</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.calories}</StyledTableCell>
              <StyledTableCell align="right">{row.fat}</StyledTableCell>
              <StyledTableCell align="right">{row.carbs}</StyledTableCell>
              <StyledTableCell align="right">{row.protein}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
