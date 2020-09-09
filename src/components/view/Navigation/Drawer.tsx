import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import React from 'react';

import { IDrawerProps } from './interfaces';
import useStyles from './style';

import { NavLink } from 'react-router-dom';

const DrawerHelper: React.FunctionComponent<IDrawerProps> = (props) => {
  const classes = useStyles();

  const { open } = props;

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
      <div className={classes.drawerHeader} />
      <Divider />
      <div>
        {links}
      </div>
    </Drawer>
  );
};

export default DrawerHelper;
