import DashboardIcon from '@material-ui/icons/Dashboard';
import TableChartIcon from '@material-ui/icons/TableChart';
import ViewAgendaIcon from '@material-ui/icons/ViewAgenda';

import React from 'react';
import Dashboard from '../Dashboard';
import Tables from '../Tables';
import { INav } from './interfaces';
import Cards from '../Cards';

const navigation: INav[] = [
  {
    component: Dashboard,
    href: '/dashboard',
    icon: <DashboardIcon />,
    name: 'Dashboard',
    path: "/dashboard",
  },
  {
    component: Tables,
    href: '/tables',
    icon: <TableChartIcon />,
    name: 'Regular Tables',
    path: "/tables",
  },
  {
    component: Cards,
    href: '/cards',
    icon: <ViewAgendaIcon />,
    name: 'Cards',
    path: "/cards",
  },
];

export default navigation;