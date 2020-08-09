import React from "react";
import { Grid, Typography} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

    [theme.breakpoints.between("sm", "xl")]: {
      data: {
        background: 'purple',
        textAlign: 'center',
      }
    }
  })
);

const Telephone = (props: any) => {
  const classes = useStyles({});

  return (
    <Grid container>
      <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
        <Typography className={classes.data}>
        <div>
            <div >
            <textarea placeholder='Enter your address' className={classes.pd}></textarea>
            </div>
            <div >
            <textarea placeholder='Enter your telephone' className={classes.pd}></textarea>
            </div>
        </div>
            </Typography>
      </Grid>
    </Grid>
  );
};

export default Telephone;
