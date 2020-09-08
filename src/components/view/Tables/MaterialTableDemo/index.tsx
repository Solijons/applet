import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import CurrenciesTable from './CurreniesTable';
import CustomizedTable from './CustomizedTable';
import SupportBoardTable from './SupportBoardTable';
import TransactionsTable from './TransactionsTable';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

export default function MaterialTableDemo() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SupportBoardTable />
        </Grid>

        <Grid item xs={12} sm={6}>
          <TransactionsTable />
        </Grid>

        <Grid item xs={12} sm={6}>
          <CurrenciesTable />
        </Grid>
        <Grid item xs={12}>
          <CustomizedTable />
        </Grid>
      </Grid>
    </div>
  );
}
