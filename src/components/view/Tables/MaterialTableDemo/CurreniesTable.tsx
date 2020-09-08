import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';

import { Avatar, CardHeader, IconButton, Tooltip, Typography } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import CURRENCY_DATA from './CURRENCY_DATA.json';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    container: {
      maxHeight: 440,
    },
    fab: {
      margin: theme.spacing(2),
    },
  }),
);


export default function CurrenciesTable() {
  const classes = useStyles();

  const tableHeaders = ['PROFILE', 'CURRENCY', 'BALANCE', 'ACTIONS'];

  return (
    <TableContainer component={Paper} className={classes.container}>
      <CardHeader title={
        <Typography variant="h5" gutterBottom noWrap>
          Exchange
        </Typography>
      } />
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            {tableHeaders.map((header, index) => {
              return (
                <TableCell
                  style={{
                    backgroundColor: '#f4f5fd'
                  }}
                  key={header}
                  align={index !== 0 ? "right" : undefined}
                >
                  {header}
                </TableCell>
              );
            })}
          </TableRow>
        </TableHead>
        <TableBody>
          {CURRENCY_DATA.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                <Avatar alt={row.profile} src={row.image} />
                <Typography>
                  {row.profile}
                </Typography>
              </TableCell>
              <TableCell align="right">{row.currency}</TableCell>
              <TableCell align="right">{row.balance}</TableCell>
              <TableCell align="right">
                <Tooltip title="Add" interactive>
                  <IconButton aria-label="add">
                    <AddIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Delete" interactive>
                  <IconButton aria-label="delete">
                    <ClearIcon />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
