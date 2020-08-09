import React from 'react';
import Typography from '@material-ui/core/Typography';
import {Container, Grid, Paper} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

const useStyles = makeStyles((theme: Theme) => createStyles({
    root: {
      fontSize: 16,
      backgroundColor: '#FAFAFA',
      height: 497,
      textAlign: 'center',
    },
    head0: {
      width: 776,
      height: 350,
    },
    head: {
      
     
    },
    head1: {
        fontSize: 40,
        
      },
    inputing:{
      width: 628,
      height: 64,
      marginLeft: 72,
    },
    button1: {
      variant: 'contained',
      color: 'purple',
      width: 163,
      height: 36,
      fontSize: 14,
      marginLeft: 300,
    },
  }),
);

export default function ThirdButton() {
    const classes=useStyles();

const [name, setName] = React.useState('');
const [phone, setPhone] = React.useState('');

// function AddCard(){
//   axios.post('https://localhost:44359/Api/Book/AddBook/', {Name:this.state.Name, Author:this.state.Author,
//          Amount:this.state.Amount}).then(JSON =>{
//         if(JSON.data.Status==='Success'){
//             console.log(JSON.data.Status);
//             alert("Data save saccessfully");
//             // this.props.history.push('/Bookslist')
//         } 
// }


  return (

      <Container maxWidth="xl" className={classes.root}>
        <Container maxWidth="md" >
          <Grid className={classes.head0} container spacing={3}>
          <Grid className={classes.head}>
          <Typography  className={classes.head1}>Заполните заявку и получите #картакарта</Typography>
          </Grid>
          <Grid className={classes.head}>
          <TextField className={classes.inputing} id="outlined-search" label="Your name" type="search" variant="outlined" />
          </Grid>
          <Grid className={classes.head}>
          <TextField className={classes.inputing} id="outlined-search" label="Your telephone" type="search" variant="outlined" />
          </Grid>
         <Grid><button  className={classes.button1}>Оформить</button></Grid>
          </Grid>
      </Container>
      </Container>

  );
}