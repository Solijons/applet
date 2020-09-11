import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import React from 'react';
import useStyles from './style';
import { IDrawerProps } from './interfaces';

const AppBarNav: React.FunctionComponent<IDrawerProps> = (props) => {
  const classes = useStyles();
  const { open, handleDrawerOpen } = props;

  return (
    <div>
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            {'Tractivity '[0].toLocaleUpperCase() + 'Tractivity '.substr(1).toLocaleLowerCase()}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppBarNav;
