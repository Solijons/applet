import { Avatar, Card, CardContent, CardHeader, Grid, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import React from 'react';

import {
  Games,
  InsertEmoticon,
  Laptop,
  PhoneIphone,
  TrendingDown,
  TrendingFlat,
  TrendingUp,
} from '@material-ui/icons'

interface INurseryStatusAppletProps {
  title: string;
  trend: {
    icon: JSX.Element;
    style: CSSProperties;
  };
  income: {
    spending: number;
    earning: number;
  };
  icon: JSX.Element;
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    [theme.breakpoints.up('sm')]: {
      width: "100%",
    },
  },
  cardHeader: {
    position: 'relative',
  },
  header: {
    borderRadius: '0',
    boxShadow: '0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgb(146 145 145 / 1)',
    [theme.breakpoints.up('sm')]: {
      width: "170px",
    },
    [theme.breakpoints.down('sm')]: {
      width: 250,
    }
  },
  space: {
    marginTop: theme.spacing(0.5),
    padding: theme.spacing(2)
  },
}));


function numberWithCommas(num: number | string) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const TrendingApplets = () => {
  const appletData: INurseryStatusAppletProps[] = [
    {
      icon: <Laptop />,
      income: {
        earning: 364563245,
        spending: 3245435,
      },
      title: "Laptops",
      trend: {
        icon: <TrendingUp />,
        style: {
          background: 'linear-gradient(60deg, #66bb6a, #43a047)',
        },
      },
    },
    {
      icon: <Games />,
      income: {
        earning: 56345,
        spending: 34543,
      },
      title: "Games",
      trend: {
        icon: <TrendingDown />,
        style: {
          background: 'linear-gradient(315deg, #f5f5f1 0%, #e50914 74%)',
        },
      },
    },
    {
      icon: <InsertEmoticon />,
      income: {
        earning: 95999,
        spending: 345,
      },
      title: "Masks",
      trend: {
        icon: <TrendingFlat />,
        style: {
          background: 'linear-gradient(60deg, #ffa726, #fb8c00)',
        },
      },
    },
    {
      icon: <PhoneIphone />,
      income: {
        earning: 34563,
        spending: 12040,
      },
      title: "Iphone",
      trend: {
        icon: <TrendingUp />,
        style: {
          background: '#5383ff',
        },
      },
    }
  ]
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Applet Cards
      </Typography>

      <Grid container spacing={3}>
        {appletData.map((applet: INurseryStatusAppletProps, index: number) => {
          return (
            <Grid item xs={12} sm={3} key={index}>
              <Card square>
                <Typography
                  variant="h6"
                  noWrap
                  className={classes.space}
                >
                  <Avatar
                    style={applet.trend.style}
                  >
                    {applet.icon}
                  </Avatar>
                  {applet.title}
                </Typography>
                <CardHeader
                  className={classes.cardHeader}
                  avatar={
                    <Avatar
                      className={classes.header}
                      style={applet.trend.style}
                    >
                      {applet.trend.icon}
                      <Typography>
                        {index === 0 % 2 ? `45%` : `20%`}
                      </Typography>
                    </Avatar>
                  }
                />
                <CardContent>
                  <Typography variant="body1" color="textSecondary" component="p">
                    Earning: {numberWithCommas(applet.income.earning)}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Spending: {numberWithCommas(applet.income.spending)}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        })}
      </Grid>
    </div>
  );
};

export default TrendingApplets;