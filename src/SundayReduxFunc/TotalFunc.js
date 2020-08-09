import React from 'react';
import Typography from '@material-ui/core/Typography';
import {Container, Grid} from '@material-ui/core';
import { makeStyles, createStyles, Theme, ThemeProvider } from '@material-ui/core/styles';
import FirstButtonFunc from './FirstButtonFunc';
import SecondButtonFunc from './SecondButtonFunc';
import ThirdButtonFunc from './ThirdButtonFunc';
import {connect} from 'react-redux';

const useStyles = makeStyles((theme) => createStyles({
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


function TotalFunc(props) {
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
  
    // const Title = useSelector(state => state.Title)
    const {Title} = props;
  return (

      <Container maxWidth="xl" className={classes.root}>
        <Container maxWidth="lg" >
          <Grid>
          <Typography  className={classes.head1}>Хороша всегда и везде</Typography>
  <Typography  className={classes.head1}>{Title}</Typography>
          </Grid >
        <Grid item xs={12} container spacing={3} className={classes.head1}>
        <Grid item xs={2} className={classes.head2} ><button onClick={() => setOpenFirst(false)} className={classes.button1}>Умная рассрочка</button></Grid>
        <Grid item xs={2} className={classes.head2} ><button onClick={() => handleOpenSecond()} className={classes.button2}>Кредитная карта</button></Grid>
  <Grid item xs={2} className={classes.head2} ><button onClick={() => handleOpenThird()} className={classes.button2} >{Title}</button></Grid>
        </Grid >
      
       { 
          openFirst===false ? (<FirstButtonFunc />) : openSecond ? (<SecondButtonFunc />) : (
         <ThirdButtonFunc />)
  }

      </Container>
      </Container>

  );
}

const PutStateToProps = (state) =>{
  return{
    Title: state.Title,
  };  
};

// const PutActionsToProps = (dispatch)=> {
// return{
//   changeTitle: bindActionCreators(changeTitle, dispatch),
// }
// }

export default connect(PutStateToProps)(TotalFunc);