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
      textAlign: 'center',
    },
    paper: {
      // padding: "64px 72px 64px 72px",
        background: "#FFFFFF",
        border: "2px solid #FAFAFA",
        boxSizing: "border-box",
        borderRadius: "8px",
        width: "776px",
        height: "350px"
    },
    head1: {
        fontSize: 40,
        
      },
    inputing:{
      width: 628,
      height: 64,
  
    },
    button1: {
      variant: 'contained',
      color: 'purple',
      width: 163,
      height: 36,
      fontSize: 14,
     
    },
    gridLeft: {
      marginLeft: 15,
    },
    gridLeft1: {
      marginLeft: 45,
    },
  }),
);

 
export default function ThirdButton (){
    const classes=useStyles();

    const [name, setName] = React.useState('');
    const [phone, setPhone] = React.useState('');

const handleChangeName = (e: any) =>{
  setName(e.target.value);
}

const handleChangePhone = (e: any) =>{
  setPhone(e.target.value);
}

function AddCards(){
  debugger;
      axios.post('https://localhost:44387/Api/Card/AddCard/', {Name:name, Phone:phone,
       }).then(JSON =>{
      if(JSON.data.Status==='Success'){
          console.log(JSON.data.Status);
          alert("Data save saccessfully");
          // this.props.history.push('/Bookslist')
      }     
      else{
          alert("Data not saved");
          console.log('Status is' + JSON.data.Status==='Success');
          debugger;
      }
      })
    }
  return (

      <Container maxWidth="xl" className={classes.root}>
        <Container maxWidth="md" >
          <Grid className={classes.head0}  container spacing={3}>
          <Paper  elevation={0} className={classes.paper}>
          <Grid >
          <Typography  className={classes.head1}>Заполните заявку и получите #картакарта</Typography>
          </Grid>
          <Grid className={classes.gridLeft}>
          <TextField className={classes.inputing} onChange={handleChangeName} id="outlined-search" label="Your name" type="search" variant="outlined" />
          </Grid>
          <Grid className={classes.gridLeft}>
          <TextField className={classes.inputing} onChange={handleChangePhone} id="outlined-search" label="Your telephone" type="search" variant="outlined" />
          </Grid >
         <Grid className={classes.gridLeft1}><button  className={classes.button1} onClick={AddCards}>Оформить</button></Grid>
         </Paper>
          </Grid>
      </Container>
      </Container>

  );
}
