import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: theme.spacing(1),
    },
    supportCard: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: '#e5f9ed',
    },
    secondCard: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      backgroundColor: '#fffbf2',
    },
    typo: {
      fontWeight: 700,
      color: 'black',
    }
  }),
);

export default function SupportCards() {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Support Cards
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.supportCard}>
            <CardHeader
              action={
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                >
                  Send Email
                </Button>
              }
              title={
                <Typography
                  className={classes.typo}
                  variant="h6"
                >
                  Shrimp and Chorizo Paella
                </Typography>
              }
              subheader={
                <Typography variant="body2" color="textSecondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, aliquam!
                </Typography>
              }
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.secondCard}>
            <CardHeader
              action={
                <Button
                  size="small"
                  variant="contained"
                  color="primary"
                >
                  Contact
                </Button>
              }
              title={
                <Typography
                  className={classes.typo}
                  variant="h6"
                >
                  Knowledge Base Software
                </Typography>
              }
              subheader={
                <Typography variant="body2" color="textSecondary">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, aliquam!
                </Typography>
              }
            />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}