import React from 'react';
import Typography from '@material-ui/core/Typography';
import {Container, Grid, Paper} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import {changeName, changePhone, changeTitle} from './ActionSFunc.js'
import { bindActionCreators} from 'redux';
import axios from 'axios';
import TotalFunc from './TotalFunc.js';
// import AddCards from './Api'

const useStyles = makeStyles((theme) => createStyles({
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


// class ThirdButton extends React.Component  {
  function ThirdButtonFunc(props){
  
    const classes=useStyles();
    const {Name, Phone, changeName, changePhone, changeTitle} = props;

    // function AddCards(){
    //   changeTitle();

    //   axios.get('https://localhost:44387/Api/Card/Cardsearch/' + Name)  
    //   .then(response => { 
    //     setDoubleName({doubleName: response.data}) 
    //     console.log("there is doubleName " + doubleName);
    //     // setMassiv({ massiv: response.data });
    //     // console.log("massiv length = " + massiv.length);
    //     debugger;  
    //   })  
    //   .catch(function (error) {  
    //     console.log(error);  
    //   })  

    //   for (let i = 0; i < massiv.length; i++) {
    //     if(massiv[i]!=Name){
    //       axios.post('https://localhost:44387/Api/Card/AddCard/', {Name:Name, Phone:Phone,
    //        }).then(JSON =>{ 
    //            if(JSON.data.Status==='Success'){
    //             console.log(JSON.data.Status);
    //             alert("Data save saccessfully");
    //             }
    //             else {
    //             alert("Data not saved");
    //             debugger;
    //             }
    //           }) 
    //     }  
    //    else { 
    //       alert("Ближайшие прошедшие 6 часов вы подавали заявку. Ждите звонка!");
    //       break;
    //     }
    //   }      
    // }

    function AddCardNew () {
    
      changeTitle();
const time = new Date();

let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : []

const data = JSON.parse(localStorage.getItem('items'))
console.log(data);

for(let i=data.length-1; i>=0; i--) {

  if(itemsArray[i][0]==Phone){
    if(time - Date.parse(itemsArray[i][1]) < 1000*60*60){
    alert("Ближайший прошедший 1 час вы подавали заявку. Ждите звонка!");
    return;
      }
    }
    }

      itemsArray.push([Phone, time]);
      localStorage.setItem('items', JSON.stringify(itemsArray))
alert("Ваша заявка отправлена!");           
    //какая то фия для передачи данных 
  
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
          <TextField className={classes.inputing} value={Name} 
          onChange={(event) => changeName(event.target.value)} 
          id="outlined-search" label="Your name" type="search" variant="outlined" />
          </Grid>
          <Grid className={classes.gridLeft}>
          <TextField className={classes.inputing} value={Phone} 
          onChange={(event) => changePhone(event.target.value)} 
          id="outlined-search" label="Your telephone" type="search" variant="outlined" />
          </Grid >
         <Grid className={classes.gridLeft1}><button  className={classes.button1} onClick={AddCardNew}>Оформить</button></Grid>
         </Paper>
          </Grid>
      </Container>
      </Container>

  );
}

const PutStateToProps = (state) =>{
  return{
    Name: state.Name,
    Phone: state.Phone,
    Title: state.Title,
  };  
};

const PutActionsToProps = (dispatch)=> {
return{
  changeName: bindActionCreators(changeName, dispatch),
  changePhone: bindActionCreators(changePhone, dispatch),
  changeTitle: bindActionCreators(changeTitle, dispatch),
}
}

export default connect(PutStateToProps, PutActionsToProps)(ThirdButtonFunc);