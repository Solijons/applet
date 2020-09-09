import DashboardIcon from '@material-ui/icons/Dashboard';
import TableChartIcon from '@material-ui/icons/TableChart';
import React from 'react';
import Dashboard from '../Dashboard';
import Tables from '../Tables';
import { INav } from './interfaces';

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
];

export default navigation;