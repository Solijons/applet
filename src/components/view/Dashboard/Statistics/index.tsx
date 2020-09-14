import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import MonthlyStats from './MonthlyStats';

import { green, red, yellow } from '@material-ui/core/colors';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import AssessmentIcon from '@material-ui/icons/Assessment';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import PersonIcon from '@material-ui/icons/Person';
import CustomizedTimeline from './CustomizedTimeline';
import KnowledgeBase from './KnowledgeBase';
import TableStats from './TableStats';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
  }),
);

export default function Statistics() {
  const classes = useStyles();

  const monthlyStats = [
    {
      avatar: <KeyboardIcon />,
      report: "$3,485",
      result: "+36% from last month",
      style: {
        backgroundColor: '#263055'
      },
      title: "Orders",
      trend: <ArrowDownwardIcon color="error" />,
    },

    {
      avatar: <AssessmentIcon />,
      report: "436",
      result: "+65% from last month",
      style: {
        backgroundColor: '#1bc943'
      },
      title: "Reports",
      trend: <FiberManualRecordIcon style={{ color: yellow[700] }} />,
    },
    {
      avatar: <PersonIcon />,
      report: "4867",
      result: "+22% from last month",
      style: {
        backgroundColor: red[500]
      },
      title: "Customers",
      trend: <ArrowUpwardIcon style={{ color: green[500] }} />,
    },
    {
      avatar: <PersonIcon />,
      report: "433",
      result: "+32% from last month",
      style: {
        backgroundColor: '#5383ff'
      },
      title: "Sales",
      trend: <ArrowDownwardIcon />,
    },
  ];

  return (
    <div className={classes.root}>

      <Grid container spacing={3}>
        {monthlyStats.map((mStat) => {
          return (
            <Grid key={mStat.title} item xs={12} sm={3}>
              <MonthlyStats
                title={mStat.title}
                avatar={mStat.avatar}
                trend={mStat.trend}
                report={mStat.report}
                result={mStat.result}
                style={mStat.style}
              />
            </Grid>
          );
        })}
        <Grid item xs={12} sm={6}>
          <KnowledgeBase />
        </Grid>
        <Grid item xs={12} sm={6}>
          <CustomizedTimeline />
        </Grid>

        <Grid item xs={12}>
          <TableStats />
        </Grid>
      </Grid>
    </div>
  );
}
