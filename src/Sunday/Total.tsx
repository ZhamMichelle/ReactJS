import React from 'react';
import Typography from '@material-ui/core/Typography';
import {Container, Grid} from '@material-ui/core';
import { makeStyles, createStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import FirstButton from './FirstButton';
import SecondButton from './SecondButton';
import ThirdButton from './ThirdButton2';
import clsx from 'clsx';
const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
      backgroundColor: '#FAFAFA',
   
    },
    head1: {
        fontSize: 40,
        marginLeft: 40,
      },
      head2: {
        width: 163,
      },
    button1: {
        variant: 'contained',
        color: 'primary',
        width: 163,
        height: 36,
        fontSize: 14,
      },
      button2: {
        variant: 'contained',
        color: 'secondary',
        width: 163,
        height: 36,
        fontSize: 14,
      },
  }),
);

export default function Total() {
    const classes=useStyles();

    const [openFirst, setOpenFirst] = React.useState(false);
    const [openSecond, setOpenSecond] = React.useState(true);
  

    const handleOpenSecond = () => {
      setOpenFirst(true);
      setOpenSecond(true);
    };
    const handleOpenThird = () => {
      setOpenFirst(true);
      setOpenSecond(false);
    };

  return (

      <Container maxWidth="xl" className={classes.root}>
        <Container maxWidth="lg" >
          <Grid>
          <Typography  className={classes.head1}>Хороша всегда и везде</Typography>
          </Grid >
        <Grid item xs={12} container spacing={3} className={classes.head1}>
        <Grid item xs={2} className={classes.head2} ><button onClick={() => setOpenFirst(false)} className={classes.button1}>Умная рассрочка</button></Grid>
        <Grid item xs={2} className={classes.head2} ><button onClick={() => handleOpenSecond()} className={classes.button2}>Кредитная карта</button></Grid>
        <Grid item xs={2} className={classes.head2} ><button onClick={() => handleOpenThird()} className={classes.button2}>Заполните заявку</button></Grid>
        </Grid >
      
       { 
          openFirst===false ? (<FirstButton />) : openSecond ? (<SecondButton />) : (<ThirdButton />)
  }

      </Container>
      </Container>

  );
}