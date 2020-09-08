import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuIcon from '@material-ui/icons/Menu';
import clsx from 'clsx';
import React from 'react';
import useStyles from './style';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { Fade, Grid } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import ServiceFactory from '../../../context/factories/ServiceFactory';
import { IDrawerProps } from './interfaces';

const service = new ServiceFactory().getSiteService();

const AppBarNav: React.FunctionComponent<IDrawerProps> = (props) => {
  const classes = useStyles();
  const siteName = service.getSiteShortNameFromURL()?.toLocaleUpperCase();

  const theme = useTheme();

  const { open, handleDrawerOpen, handleDrawerClose } = props;

  return (
    <div>
      <AppBar
        position="fixed"
        className={open ? classes.clippedAppBar : clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar
          style={{
            padding: '0',
          }}
        >
          <div className={classes.bayerIcon}>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
            >
              <img src="https://shared.bayer.com/img/bayer-logo.svg" alt="" width="50" height="54" />
              {
                open && (
                  <>
                    <Fade in={open} timeout={1500}>
                      <Typography className={`${classes.title}  ${open ? '' : classes.hide}`}>
                        {'Tractivity '[0].toLocaleUpperCase() + 'Tractivity '.substr(1).toLocaleLowerCase()}
                        {siteName !== undefined ?
                          siteName[0].toLocaleUpperCase() + siteName.substr(1).toLocaleLowerCase()
                          : ''
                        }
                      </Typography>
                    </Fade>
                    <Fade in={open} timeout={1500}>
                      <div className={classes.drawerHeader}>
                        <IconButton onClick={() => handleDrawerClose()} className={clsx(classes.menuButton)} >
                          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                      </div>
                    </Fade>
                  </>
                )
              }

            </Grid>
          </div>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppBarNav;
