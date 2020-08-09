import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {Container, Grid} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';

const useStyles = makeStyles((theme) => createStyles({
    root: {
      fontSize: 16,
      backgroundColor: '#FAFAFA',
      // textAlign: 'center',
      // alignItems: 'center',
      height: 497,
    },
    head1: {
        fontSize: 28,
      },
    head2: {
        fontSize: 18,
      },
      img: {
        marginTop: 32,
      },
      bottoming: {
        marginTop: 32,
        backgroundColor: '#FFFFFF',
        width: 1176,
        height: 104,
        verticalAlign: 'center',
      },
      bottoming2: {
        marginTop: 10,
        
        
      },
      bottoming3: {
        color: 'purple',
        marginLeft: 34,
      },
      lamp: {
        width: 25,
        height: 30,
        marginTop: 10,
        marginLeft: 21,
      },
      bottoming4: {
        color: 'purple',
        marginLeft: 79,
      },
  }),
);

export default function SecondButtonFunc() {
    const classes=useStyles();

    const [open, setOpen] = React.useState(false);

    const handleOpenClose = (bol) => {
      setOpen(bol);
    };



  return (

      <Container maxWidth="xl" className={classes.root}>
        <Container maxWidth="lg">
        <Typography  className={classes.head1}>Как правильно пользоваться кредитным лимитом и не платить проценты</Typography>
        <Typography className={classes.head2}>Управление в Starbanking 24/7</Typography>
        <Grid container spacing={1} className={classes.img}>
        <img src="Credit_Card.svg" alt="Credit card" />
      </Grid>
      <Grid className={classes.bottoming}>
        <Typography className={classes.bottoming2}><EmojiObjectsIcon className={classes.lamp} /><b className={classes.bottoming3}>1.</b> 1 сентября вы совершаете покупку на сумму 5 000 тенге за счет кредитного лимита</Typography>
        <Typography className={classes.bottoming2}><b className={classes.bottoming4}>2.</b> Погасив 5 000 тенге до 25 октября, вы не платите никаких процентов за пользлвание кредитным лимитом</Typography>
      </Grid>
      </Container>
      </Container>

  );
}