import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';

import Grid from '@material-ui/core/Grid';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

interface IMonthlyStatsProps {
  avatar: JSX.Element;
  report: string | number;
  result: string;
  style: CSSProperties;
  title: string;
  trend: JSX.Element;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 345,
    },
  }),
);

export default function MonthlyStats(props: IMonthlyStatsProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar
            aria-label={props.title}
            style={props.style}
          >
            {props.avatar}
          </Avatar>
        }
        title={props.title}
      />
      <CardContent>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          {props.trend}
          <Typography variant="h3">
            {props.report}
          </Typography>
        </Grid>
      </CardContent>
      <CardContent>
        <Typography align="center" variant="body2" color="textSecondary" component="p">
          {props.result}
        </Typography>
      </CardContent>
    </Card>
  );
}
