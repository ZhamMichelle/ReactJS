import React from "react";
import { Grid, Button } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import PDHook from "./PDHook";
import TelephoneHook from "./TelephoneHook";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    [theme.breakpoints.between("sm", "xl")]: {
        Loc:{
            
            textAlign: 'center',
            marginLeft: '400px'
        },
      buttonLoc: {
        margin: 'auto',
        // margin: '20px 0px 20px 20px'
        
      },
      sizing: {
          maxheight: '800px'
      }
        }
  })
);
enum Type {
  PDHook,
  TelephoneHook
}
const Header = (props: any) => {
  const classes = useStyles({});
  const [type, setType] = React.useState<Type>(Type.PDHook);
  const showPD = () => {
    setType(Type.PDHook);
  };
  const showTelephone= () => {
    setType(Type.TelephoneHook);
  };
  return (
    <Grid className={classes.sizing}>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12} className={classes.Loc}>
          <Grid container spacing={10} >
            <Grid item>
              <Button onClick={() => showPD()} variant="contained" className={classes.buttonLoc}>
                Personal Data
              </Button >
            </Grid>
            <Grid item>
              <Button onClick={() => showTelephone()} variant="contained" className={classes.buttonLoc}>
                Telephone
              </Button>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          {type ? <TelephoneHook /> : <PDHook />}
        </Grid>
      </Grid>
  );
};

export default Header;
