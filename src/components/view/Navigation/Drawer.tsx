import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import React from 'react';

import { IDrawerProps } from './interfaces';
import useStyles from './style';

import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { NavLink } from 'react-router-dom';
import { useTheme } from '@material-ui/core';

const DrawerHelper: React.FunctionComponent<IDrawerProps> = (props) => {
  const classes = useStyles();
  const theme = useTheme();
  const { open, handleDrawerClose } = props;

  const links = (
    <List>
      {props.navigation.map((nav) => {
        return (
          <NavLink
            key={nav.href}
            to={nav.href}
            style={{
              textDecoration: "none",
              color: "#333",
            }}
          >
            <ListItem button>
              <ListItemIcon>
                {nav.icon}
              </ListItemIcon>
              <ListItemText>
                {nav.name}
              </ListItemText>
            </ListItem>
          </NavLink>
        );
      })}
    </List>
  )

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </div>
      <Divider />
      <div>
        {links}
      </div>
    </Drawer>
  );
};

export default DrawerHelper;
