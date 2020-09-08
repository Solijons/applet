import MaterialTable, { Column } from 'material-table';
import React from 'react';

import { Avatar, Grid, Typography } from '@material-ui/core';
import StatusPill from '../../../common/StatusPill';
import MATERIAL_DEMO_DATA from './MATERIAL_DEMO_DATA.json';

import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

interface IRow {
  createdAt: string;
  dueAt: string;
  id: number;
  name: string;
  priority: string;
  status: string;
}

interface ICustomerTableState {
  columns: Array<Column<IRow>>;
  data: IRow[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      marginRight: theme.spacing(2),
    },
    iconButton: {
      border: '1px solid #bdbdbd',
      borderRadius: theme.spacing(2),
      padding: theme.spacing(1),
    }
  }),
);

export default function SupportBoardTable() {
  const classes = useStyles();

  const [state, setState] = React.useState<ICustomerTableState>({
    columns: [
      { title: 'ID', field: 'id' },
      {
        title: 'NAME',
        field: 'name',
        render: (rowData) =>
          <Grid
            container
            direction="row"
            justify="flex-start"
            alignItems="flex-start"
          >
            <Avatar className={classes.avatar}>{rowData.name[0]}</Avatar>
            <Typography>{rowData.name}</Typography>
          </Grid>
      },
      { title: 'PRIORITY', field: 'priority', render: (rowData) => <StatusPill status={rowData.priority} /> },
      { title: 'STATUS', field: 'status', render: (rowData) => <StatusPill status={rowData.status} /> },
      { title: 'CREATED DATE', field: 'createdAt' },
      { title: 'DUE DATE', field: 'dueAt' },
    ],
    data: MATERIAL_DEMO_DATA,
  });

  return (
    <MaterialTable
      title="Support Board"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
      options={{
        maxBodyHeight: 500,
        paging: false,
        selection: true

      }}
      actions={[
        {
          icon: 'add',
          isFreeAction: true,
          onClick: (event) => alert("You want to add a new row"),
          tooltip: 'Add ticket',
        }
      ]}
    />
  );
}
