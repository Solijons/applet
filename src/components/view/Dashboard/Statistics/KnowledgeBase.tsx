import { Avatar, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Chip from '@material-ui/core/Chip';
import Grid from '@material-ui/core/Grid';
import { createStyles, makeStyles, Theme, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import React from 'react';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    text: {
      padding: theme.spacing(2, 2, 0),
    },
    media: {
      backgroundImage: 'url(https://picsum.photos/id/193/3578/2451?blur=10)',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      color: 'white',
      height: 240,
    },
    large: {
      marginTop: theme.spacing(1),
      height: theme.spacing(16),
      width: theme.spacing(16),
    },
  }),
);

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    body: {
      fontSize: 14,
      borderBottom: '0',
    },
  }),
)(TableCell);

const StyledChip = (status: string) => {
  if (status === "PENDING") {
    return (
      <Chip
        label="PENDING"
        style={{
          backgroundColor: '#f4772e',
          borderRadius: '5px',
          color: '#fff',
          fontWeight: 700,
          paddingLeft: '.6em',
          paddingRight: '.6em',
        }}
      />
    );
  } else if (status === "COMPLETED") {
    return (
      <Chip
        label="COMPLETED"
        style={{
          backgroundColor: '#1bc943',
          borderRadius: '5px',
          color: '#fff',
          fontWeight: 700,
          paddingLeft: '.6em',
          paddingRight: '.6em',
        }}
      />
    );
  } else if (status === "DECLINED") {
    return (
      <Chip
        label="DECLINED"
        style={{
          backgroundColor: '#f83245',
          borderRadius: '5px',
          color: '#fff',
          fontWeight: 700,
          paddingLeft: '.6em',
          paddingRight: '.6em',
        }}
      />
    );
  } else {
    return (
      <Chip
        label="ON HOLD"
        style={{
          backgroundColor: '#5383ff',
          borderRadius: '5px',
          color: '#fff',
          fontWeight: 700,
          paddingLeft: '.6em',
          paddingRight: '.6em',
        }}
      />
    );
  }
};

export default function KnowledgeBase() {
  const classes = useStyles();

  const rows = [
    {
      employee: "Adam Smith",
      image: "https://i.picsum.photos/id/1005/5760/3840.jpg?hmac=2acSJCOwz9q_dKtDZdSB-OIK1HUcwBeXco_RMMTUgfY",
      status: "PENDING"
    },
    {
      employee: "Albert Nikola",
      image: "https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM",
      status: "COMPLETED"
    },
    {
      employee: "Bon Jovi",
      image: "https://i.picsum.photos/id/1011/5472/3648.jpg?hmac=Koo9845x2akkVzVFX3xxAc9BCkeGYA9VRVfLE4f0Zzk",
      status: "DECLINED"
    },
    {
      employee: "Omar Simpson",
      image: "https://i.picsum.photos/id/1012/3973/2639.jpg?hmac=s2eybz51lnKy2ZHkE2wsgc6S81fVD1W2NKYOSh8bzDc",
      status: "ON HOLD"
    },
  ];

  return (
    <Card style={{ height: 900 }}>
      <CardContent className={classes.media}>
        <Grid
          container
          direction="column"
          justify="space-evenly"
          alignItems="center"
        >
          <Typography variant="h4" align="center" gutterBottom>
            Knowledge Base Software
          </Typography>
          <Typography variant="h6" align="center" gutterBottom>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem.
          </Typography>
          <Button color="inherit" variant="contained">
            CONTACT US
          </Button>
          <br />
          <Avatar
            className={classes.large}
            src="https://i.picsum.photos/id/1027/2848/4272.jpg?hmac=EAR-f6uEqI1iZJjB6-NzoZTnmaX0oI0th3z8Y78UpKM"
          />
        </Grid>
      </CardContent>
      <CardContent>
        <div style={{ marginBottom: '50px' }} />
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Employee</TableCell>
              <TableCell align="center">Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

            {rows.map((row) => (
              <TableRow key={row.employee}>
                <StyledTableCell component="th" scope="row">
                  <Avatar alt={row.employee} src={row.image} />
                  <Typography>{row.employee}</Typography>
                </StyledTableCell>
                <StyledTableCell align="center">
                  {StyledChip(row.status)}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Button variant="outlined" color="primary">
                    Chat
                    </Button>
                </StyledTableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </CardContent>
    </Card >
  );
}
