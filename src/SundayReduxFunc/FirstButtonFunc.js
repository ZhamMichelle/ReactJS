import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {Container, Grid} from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import {ArrowDropUp, ArrowDropDown, EmojiObjects} from '@material-ui/icons/';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper} from '@material-ui/core';


const useStyles = makeStyles((theme) => createStyles({
    root: {
      fontSize: 16,
      backgroundColor: '#FAFAFA'
    },
    root1: {
        maxWidth: 1190,
        "&:hover": {
            backgroundColor: "#E8E8E8",
            cursor: "pointer"
          }

      },
    head1: {
        fontSize: 28,
      },
    head2: {
        fontSize: 18,
      },
      backing1: {
          backgroundColor: "#FFFFFF",
          textAlign: 'center',
          width: 299,
          height: 259,
      },
      backing11: {

        width: 299,

    },
      backing2: {
        backgroundColor: "#FFFFFF",
        textAlign: 'center',
        width: 876,
        height: 64,
    },
    backing3: {
        backgroundColor: "#FFFFFF",
        verticalAlign: "middle",
    },
      head3: {
        fontSize: 22,
        fontWeight: 'bold',
      },
      zero: {
        fontSize: 72,
        color: 'green',
      },
      panel: {
          width: 1176,
        //   height: 52,
        fontSize: 16,
      },
      secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
      },
     buttonRight:{
textAlign: 'right',
         marginRight: 24,
     },
     buttonLeft:{
        textAlign: 'left',
        marginLeft: 21,
    },
    buttonLeft2:{
        textAlign: 'left',
        marginLeft: 21,
    },
    buttonLeft3:{
        textAlign: 'left',
        marginLeft: 56,
    },
    emojji: {
        width: 14,
        height: 20,
    },
    img: {
        width: 300,
        height: 280,
   
        // marginTop: 25
      },
      noteDetail: {
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 14,
        color: "#5B5B5B",
        marginTop: 10
      },
      bliat: {
        textAlign: 'center',
      },
      tableWidth: {
        width: 64,
      },
  }),
);

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('#Karta', '#Karta', '#Karta', '#Karta', '#Karta'),
  createData('#Karta', '#Karta','#Karta', '#Karta', '#Karta'),
  createData('#Karta', '#Karta', '#Karta', '#Karta', '#Karta'),
  createData('#Karta', '#Karta','#Karta', '#Karta', '#Karta'),
 
];

export default function FirstButtonFunc() {
    const classes=useStyles();

    const [open, setOpen] = React.useState(false);

    const handleOpenClose = (bol) => {
      setOpen(bol);
    };



  return (

      <Container maxWidth="lg" className={classes.root}>
        <Typography  className={classes.head1}>Умная рассрочка до 12 месяцев</Typography>
        <Typography className={classes.head2}>Управление в Starbanking 24/7</Typography>
        <Grid container spacing={1}>

        <Grid item sm={3}>
          <Typography className={classes.backing1}>
              <div className={classes.head3}>В сети партнера банка</div>
              <div>3, 6 или 12 месяцев</div>
              <div><b className={classes.zero}>0%</b> комиссия</div>
          </Typography>
        </Grid>
        <Grid item sm={9} container spacing={0} >
            {/* <Grid item xs ={12} ><Typography className={classes.backing2}>xs=9</Typography></Grid>
            <Grid item xs ={12} ><Typography className={classes.backing2}>xs=9</Typography></Grid>
            <Grid item xs ={12} ><Typography className={classes.backing2}>xs=9</Typography></Grid>
            <Grid item xs ={12} ><Typography className={classes.backing2}>xs=9</Typography></Grid> */}
 <TableContainer component={Paper}>
      <Table  aria-label="simple table">
        {/* <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead> */}
        <TableBody>
          {rows.map(row => (
            <TableRow key={row.name}>
             
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
        </Grid>

        <Grid item xs={12} container spacing={0} className={classes.root1}>
            <Grid item sm={9} onClick={() => handleOpenClose(!open)} className={classes.backing3} >
                <Typography className={classes.buttonLeft2}><EmojiObjects className={classes.emojji} /><b className={classes.buttonLeft}>Посдказка:</b> Активируйте режим рассрочки в Starbanking и покупайте в рассрочку</Typography>
            </Grid>
            {open === true ? (<Grid item xs={3}  className={classes.backing3} >
                 <Typography  onClick={() => handleOpenClose(!open)}  className={classes.buttonRight}> <ArrowDropDown /></Typography>
            </Grid>)
            :
            (<Grid item sm={3}  className={classes.backing3} >
                <Typography onClick={() => handleOpenClose(!open)} className={classes.buttonRight}> <ArrowDropUp /></Typography>
            </Grid>)}
        </Grid>
           { open && (
           <Grid item xs={12} container spacing={0}>
           <Grid item sm={7} className={classes.backing3}>
          <Typography className={classes.buttonLeft3}>
            <b>Режим рассрочки</b>
           < Typography className={classes.noteDetail}>
                    1. Выберите #картукарту из списка ваших доступных счетов.
                  </Typography>
                  <Typography className={classes.noteDetail}>
                    2. Нажмите на кнопку “Рассрочка”. В обычном состоянии режим
                    рассрочки выключен, что и показывает статус “Off”.
                  </Typography>
                  <Typography className={classes.noteDetail}>
                    3. Включите режим рассрочки, сдвинув ползунок направо.
                  </Typography>
                  <Typography className={classes.noteDetail}>
                    4. С включенным режимом рассрочки все ваши покупки по
                    #картекарте от 5 000 т за счет кредитного лимита будут
                    делиться на равные части без комиссий в сети партнеров.
                  </Typography>
          </Typography>
          </Grid>
          <Grid item sm={5} className={classes.bliat}>
          <img className={classes.img}
                      src="final_ver_animation.gif"
                      alt="star_mobile_banking"
                    />
          </Grid>
          </Grid>
 )}

      </Grid>
      </Container>

  );
}