import React from 'react';
import Typography from '@material-ui/core/Typography';
import {Container, Grid, Paper} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import {changeName, changePhone} from './ActionS.js'
import { bindActionCreators} from 'redux';
import axios from 'axios';
import classes from './ThirdButton.module.css';


class ThirdButton extends React.Component  {
  
  
   render(){ 
    const {Name, Phone, changeName, changePhone} = this.props;

    function AddCards(){
      debugger;
          axios.post('https://localhost:44387/Api/Card/AddCard/', {Name:Name, Phone:Phone,
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
          <Grid className={classes.head1}>
            <p></p>
          <Typography  >Заполните заявку и получите #картакарта</Typography>
          </Grid>
          <Grid className={classes.gridLeft}>
          <TextField className={classes.inputing} value={Name} 
          onChange={(event) => changeName(event.target.value)} 
          id="outlined-search" label="Your name" type="search" variant="outlined" />
          </Grid>
          <Grid className={classes.gridLeft}>
          <TextField className={classes.inputing} value={Phone} 
          onChange={(event) => changePhone(event.target.value)} 
          id="outlined-search" label="Your telephone" type="search" variant="outlined" />
          </Grid >
         <Grid className={classes.gridLeft1}><button  className={classes.button1} onClick={AddCards}>Оформить</button></Grid>
         </Paper>
          </Grid>
      </Container>
      </Container>

  );
}}

const PutStateToProps = (state) =>{
  return{
    Name: state.Name,
    Phone: state.Phone,
  };  
};

const PutActionsToProps = (dispatch)=> {
return{
  changeName: bindActionCreators(changeName, dispatch),
  changePhone: bindActionCreators(changePhone, dispatch),
}
}

export default connect(PutStateToProps, PutActionsToProps)(ThirdButton);