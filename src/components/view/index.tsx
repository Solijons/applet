import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import clsx from 'clsx';
import React from 'react';
import DashboardIcon from '@material-ui/icons/Dashboard';
import Copyright from '../common/Copyright';
import { IAppBarProps } from './interfaces';
import navStyles from './Navigation/style';
import useStyles from './viewStyles';
import { Typography } from '@material-ui/core';
import Navigation from './Navigation';
import { Route, Switch } from "react-router-dom";
import appRoutes from './Navigation/routes';

let theme = createMuiTheme({
  overrides: {
    MuiButton: {
      containedPrimary: {
        backgroundColor: '#5383ff'
      }
    },
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#3d4977'
      }
    }
  }
});

const View: React.FunctionComponent<IAppBarProps> = (props: IAppBarProps) => {
  const [open, setOpen] = React.useState(false);

  theme = responsiveFontSizes(theme);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const classes = useStyles();
  const navClasses = navStyles();
  const dashboardSiteName = `Dashboard Tractivity`;

  const swithRoutes = (
    <Switch>
      {appRoutes.map((prop, key) => {
        return (
          <Route
            path={prop.path}
            component={prop.component}
            key={key}
          />
        )
      })
      }
    </Switch>
  )

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline />
        <Navigation
          navigation={appRoutes}
          open={open}
          handleDrawerOpen={handleDrawerOpen}
          handleDrawerClose={handleDrawerClose}
        />
        <main className={clsx(navClasses.content, {
          [navClasses.contentShift]: open,
        })}>
          <div className={navClasses.drawerHeader} />
          <Grid>
            <Grid item xs={12}>
              <Paper elevation={3} className={classes.paperMin}>
                <div className={classes.grid}>
                  <Grid
                    container
                    spacing={3}
                    style={{ padding: theme.spacing(3) }}
                  >
                    <Paper elevation={2} className={classes.paperMin}>
                      <DashboardIcon />
                    </Paper>

                    <Typography className={classes.paperMin} variant="h6">
                      {dashboardSiteName}
                    </Typography>

                    <Grid
                      style={{
                        width: '75%'
                      }}
                      container
                      direction="row"
                      justify="flex-end"
                      alignItems="center"
                    >
                      <Button variant="contained">
                        Open Dialog
                    </Button>
                    </Grid>

                  </Grid>
                </div>
              </Paper>
            </Grid>
          </Grid>
          <Grid container spacing={3} style={{ padding: theme.spacing(3) }}>
            <Grid container item xs={12}>
              {swithRoutes}
            </Grid>
          </Grid>
          <Copyright />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default View;