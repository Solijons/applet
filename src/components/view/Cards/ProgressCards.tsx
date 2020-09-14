import {
  Card,
  CardContent,
  Grid,
  Typography,
} from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import React from 'react';

import Box from '@material-ui/core/Box';
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';

interface IProgressCard {
  loaderColor?: 'primary' | 'secondary' | 'inherit';
  progress: number;
  styles?: CSSProperties;
  title: string;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      height: 250,
    }
  }),
);



function CircularProgressWithLabel(props: CircularProgressProps & { value: number, colortext?: string; }) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress variant="static" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          style={{
            color: props.colortext,
          }}
          variant="h6"
        >
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}



const ProgressCards = () => {
  const classes = useStyles();
  const progressCards: IProgressCard[] = [
    {
      progress: 76,
      title: "Project management",
      loaderColor: "primary"
    },
    {
      progress: 55,
      title: "Recent messages",
      loaderColor: "secondary",
    },
    {
      progress: 61,
      styles: {
        backgroundImage: "linear-gradient(90deg,#434343 0,#000)",
        color: green[500]
      },
      title: "Task manager",
      loaderColor: "inherit"
    },
    {
      progress: 72,
      styles: {
        backgroundImage: "linear-gradient(0deg,#1e3c72 0,#1e3c72 1%,#2a5298)",
      },
      title: "Analytics statistics",
      loaderColor: "secondary"
    }
  ];

  return (
    <React.Fragment>
      <Typography variant="h4" gutterBottom>
        Project progress Cards
        </Typography>
      <Grid container spacing={3}>
        {progressCards.map((card, key) => (
          <Grid key={key} item xs={12} sm={3}>
            <Card elevation={2} style={card.styles}>
              <CardContent className={classes.card}>
                <Grid
                  container
                  direction="column"
                  justify="flex-end"
                  alignItems="center"
                >
                  <CircularProgressWithLabel
                    colortext={card.styles ? "white" : undefined}
                    value={card.progress}
                    color={card.loaderColor}
                    thickness={1.2}
                    size={200}
                  />
                  <Typography gutterBottom variant="subtitle2" style={{ color: "rgb(169 162 162)" }} component="h6">
                    {card.title}
                  </Typography>
                </Grid>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default ProgressCards;