import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import React from 'react';
import {
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Typography,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    card: {
      maxHeight: 500,
    },
    actionCard: {
      padding: theme.spacing(2),
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9,
    },
  }),
);


const SquaredCard = () => {
  const classes = useStyles();
  const squeredCards = [
    {
      media: "https://picsum.photos/id/1057/536/354",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Vitae quidem cupiditate autem ullam modi ipsum. Libero omnis repudiandae reiciendis dicta.",
      title: "Card title"
    },
    {
      media: "https://picsum.photos/id/1003/536/354",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Vitae quidem cupiditate autem ullam modi ipsum. Libero omnis repudiandae reiciendis dicta.",
      title: "Card title"
    },
    {
      media: "https://picsum.photos/id/1036/536/354",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.Vitae quidem cupiditate autem ullam modi ipsum. Libero omnis repudiandae reiciendis dicta.",
      title: "Card title"
    },
  ]

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Squared Cards
      </Typography>
      <Grid container spacing={3}>
        {squeredCards.map((card, key) => (
          <Grid key={key} item xs={6} sm={4}>
            <Card square elevation={2}>
              <CardMedia
                className={classes.media}
                image={card.media}
                title="Contemplative Reptile"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {card.title}
                </Typography>

                <Typography variant="subtitle2" color="textSecondary" component="h6">
                  {card.description}
                </Typography>
              </CardContent>
              <Divider />
              <CardActions className={classes.actionCard}>
                <Button
                  size="small"
                  color="primary"
                  variant="contained"
                >
                  Go somewhere
              </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default SquaredCard;
