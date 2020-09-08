import Paper from '@material-ui/core/Paper';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';

import { IconButton, Tooltip, Typography, CardHeader } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import StatusPill from '../../../common/StatusPill';
import Transactions_DATA from './Transactions_DATA.json';


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


export default function TransactionsTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper} className={classes.container}>
      <CardHeader title={
        <Typography variant="h5" gutterBottom	noWrap>
          Transactions history
        </Typography>
      } />
      <Table stickyHeader aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>APPLICATION</TableCell>
            <TableCell align="right">DATE</TableCell>
            <TableCell align="right">PAYOUTS</TableCell>
            <TableCell align="right">STATUS</TableCell>
            <TableCell align="right">ACTIONS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Transactions_DATA.map((row) => (
            <TableRow key={row.payouts}>
              <TableCell component="th" scope="row">
                {row.application}
              </TableCell>
              <TableCell align="right">{row.payouts}</TableCell>
              <TableCell align="right">{row.date}</TableCell>
              <TableCell align="right"> <StatusPill status={row.status} avatar={true} /></TableCell>
              <TableCell align="right">
                <Tooltip title="Delete" interactive>
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title="Edit" interactive>
                  <IconButton aria-label="edit">
                    <EditIcon />
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
