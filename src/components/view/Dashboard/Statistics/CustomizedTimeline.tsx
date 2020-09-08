import { Card, CardContent, CardHeader } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import HotelIcon from '@material-ui/icons/Hotel';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import RepeatIcon from '@material-ui/icons/Repeat';
import Timeline from '@material-ui/lab/Timeline';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import React, { useEffect, useRef, useState } from 'react';

import Chart from 'chart.js';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedTimeline() {
  const [tsla, set] = useState([] as any[]);

  const classes = useStyles();
  const lineChartRef = useRef<any>();

  useEffect(() => {
    const closedTsla = tsla.map((teslaStock) => ({ close: teslaStock.close, date: teslaStock.date }));
    const chartRef = lineChartRef.current.getContext('2d');
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let myLineChart: Chart;

    myLineChart = new Chart(chartRef, {
      data: {
        datasets: [
          {
            backgroundColor: '#1bc943',
            borderColor: '#1bc943',
            data: closedTsla.map((stk) => stk.close),
            fill: false,
            label: 'Tesla Stock',
          },
        ],
        labels: closedTsla.map((stk) => stk.date.replace(/T.+Z/, '')),
      },
      options: {
        responsive: true,
        title: {
          display: true,
          text: 'Chart.js Line Chart'
        },

      },
      type: 'line',
    });
  }, [tsla]);


  useEffect(() => {
    fetch(`https://cors-anywhere.herokuapp.com/https://api.tiingo.com/tiingo/daily/tsla/prices?startDate=2020-01-02&token=f6310506fdac5c96346a73ae343e025885fd35d2`, {
      headers: {
        "Authorization": 'Token f6310506fdac5c96346a73ae343e025885fd35d2',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "http://localhost:3000"
      }
    }).then((res) => {
      return res.json();
    }).then((tslaResponse) => {
      set(tslaResponse);
    });
  }, []);

  return (
    <Card>
      <CardHeader title="Timeline" />
      <CardContent>
        <canvas id="canvas" ref={lineChartRef} />
      </CardContent>
      <Timeline align="alternate">
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              9:30 am
          </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot>
              <FastfoodIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Eat
            </Typography>
              <Typography>Because you need strength</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Typography variant="body2" color="textSecondary">
              10:00 am
          </Typography>
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary">
              <LaptopMacIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Code
            </Typography>
              <Typography>Because it&apos;s awesome!</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              <HotelIcon />
            </TimelineDot>
            <TimelineConnector className={classes.secondaryTail} />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Sleep
            </Typography>
              <Typography>Because you need rest</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot color="secondary">
              <RepeatIcon />
            </TimelineDot>
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h6" component="h1">
                Repeat
            </Typography>
              <Typography>Because this is the life you love!</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Card>
  );
}
