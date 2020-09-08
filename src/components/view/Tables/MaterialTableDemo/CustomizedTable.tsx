import { Avatar, Button, CardHeader, Divider, Grid, Typography } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import BarChartIcon from '@material-ui/icons/BarChart';
import React from 'react';

import AppsIcon from '@material-ui/icons/Apps';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import LocalAtmIcon from '@material-ui/icons/LocalAtm';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      // backgroundColor: theme.palette.common.black,
      // color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      '&:nth-of-type(odd)': {
        // backgroundColor: theme.palette.action.hover,
      },
    },

  }),
)(TableRow);

function createData(name: string, income: number, expenses: number, sales: number, price: number) {
  return { name, income, expenses, sales, price };
}

const rows = [
  createData('Tinder', 1599.99, 600.2, 24, 4.0),
  createData('Need for speed', 237.123, 90.3, 37, 4.3),
  createData('Call of Duty', 2623.4542, 160.8, 24, 6.0),
  createData('Google Cloud', 305.234, 37.7, 67, 4.3),
  createData('Apple TV', 3569, 2340.1, 49, 3.9),
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '&hover': {
        backgroundColor: '#ffecb3',
      },
    },
    table: {
      minWidth: 700,
    },
    card: {
      height: '550px',
    },
    cardHeader: {
      position: 'relative',
    },
    header: {
      background: 'linear-gradient(60deg, #66bb6a, #43a047)',
      borderRadius: '0',
      boxShadow: '0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(76, 175, 80,.4)',
    },
  }),
);


export default function CustomizedTable() {
  const classes = useStyles();

  const tableHeaders = [
    {
      icon: <AppsIcon />,
      name: 'Product',
      style: {
        color: '#3b3e66',
      },
    },
    {
      icon: <TrendingUpIcon />,
      name: 'Income',
      style: {
        color: '#1bc943',
      },
    },
    {
      icon: <TrendingDownIcon />,
      name: 'Expenses',
      style: {
        color: '#f83245',
      },
    },
    {
      icon: <ShoppingBasketIcon />,
      name: 'Sales',
      style: {
        color: '#f4772e',
      },
    },
    {
      icon: <LocalAtmIcon />,
      name: 'Price',
      style: {
        color: '#5a5a5a',
      },
    },
  ];


  return (
    <TableContainer component={Paper}>

      <CardHeader
        className={classes.cardHeader}
        avatar={
          <Avatar
            className={classes.header}
          >
            <BarChartIcon />
          </Avatar>
        }
        title={
          <Typography variant="h6">
            Customed Table
          </Typography>
        }
      />

      <Divider />
      <Table className={classes.table} aria-label="customized table">
        <caption style={{ textAlign: 'center' }}>
          <Button
            variant="text"
            color="primary"
            endIcon={<ArrowForwardIosIcon />}
          >
            View details
          </Button>
        </caption>
        <TableHead>
          <TableRow>
            {tableHeaders.map((header, index) => (
              <StyledTableCell style={header.style} key={index} align={index === 0 ? undefined : "right"}>
                <Grid
                  container
                  direction="row"
                  justify={index === 0 ? "flex-start" : "flex-end"}
                  alignContent="flex-start"
                >
                  {header.icon}
                  <Typography>{header.name}</Typography>
                </Grid>
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow hover={true} key={row.name}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">
                <Typography>${row.income}</Typography>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Typography>{row.expenses}</Typography>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Typography>{row.sales}</Typography>
              </StyledTableCell>
              <StyledTableCell align="right">
                <Typography>{row.price}</Typography>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer >
  );
}
