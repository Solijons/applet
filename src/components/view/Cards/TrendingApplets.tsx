import { Avatar, Card, Grid, CardContent, CardHeader, Typography } from '@material-ui/core';
import { makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

import {
  Games,
  Laptop,
  InsertEmoticon,
  PhoneIphone,
  TrendingFlat,
  TrendingUp,
  TrendingDown,
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
      width: "120px",
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
      title: "Laptops",
      trend: {
        icon: <TrendingUp />,
        style: {
          background: 'linear-gradient(60deg, #66bb6a, #43a047)',
        },
      },
      income: {
        spending: 3245435,
        earning: 364563245,
      }
    },
    {
      icon: <Games />,
      title: "Games",
      trend: {
        icon: <TrendingDown />,
        style: {
          background: 'linear-gradient(315deg, #f5f5f1 0%, #e50914 74%)',
        },
      },
      income: {
        spending: 34543,
        earning: 56345,
      }
    },
    {
      icon: <InsertEmoticon />,
      title: "Masks",
      trend: {
        icon: <TrendingFlat />,
        style: {
          background: 'linear-gradient(60deg, #ffa726, #fb8c00)',
        },
      },
      income: {
        spending: 345,
        earning: 95999,
      }
    },
    {
      icon: <PhoneIphone />,
      title: "Iphone",
      trend: {
        icon: <TrendingUp />,
        style: {
          background: '#5383ff',
        },
      },
      income: {
        spending: 12040,
        earning: 34563,
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
            <Grid item xs={6} sm={3} key={index}>
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
                // title={
                //   <Typography variant="h6">
                //     {applet.title}
                //   </Typography>
                // }
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