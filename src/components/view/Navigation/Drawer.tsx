import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import React from 'react';

import Link from '@material-ui/core/Link';
import { IDrawerProps } from './interfaces';
import useStyles from './style';

const DrawerHelper: React.FunctionComponent<IDrawerProps> = (props) => {
  const classes = useStyles();

  const { open } = props;

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
      <List>
        {props.navigation.map((nav) => {
          return (
            <Link
              key={nav.href}
              target="_blank"
              component="a"
              rel="noopener"
              color="inherit"
              href={nav.href}
              underline="none"
              onClick={() => {
                window.location.href = nav.href;
              }}
            >
              <ListItem>
                <ListItemIcon>
                  {nav.icon}
                </ListItemIcon>
                <ListItemText>
                  {nav.name}
                </ListItemText>
              </ListItem>
            </Link>
          );
        })}
      </List>
    </Drawer>
  );
};

export default DrawerHelper;
