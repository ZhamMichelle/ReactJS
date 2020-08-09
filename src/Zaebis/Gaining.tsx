import React from "react";
import { Grid, Button } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
// import PDNew from "./PDNew";
// import TelephoneNew from "./TelephoneNew";

function Show(props:any) {
  // const value1159 = props.this.state.value1;
  return <div>
    <div>{props.value1}</div>
    <div>{props.value2}</div>
    <div>{props.value3}</div>
    <div>{props.value4}</div>
    {/* <div>{props.loc}</div> */}
    {/* <div>{value1159}</div> */}
    {/* <div>Welcome</div> */}
  </div>;
}

function Hide(props:any) {
  return <div>Данные скрыты</div>;
}

function Gaining(props:any) {

  const isLoggedIn = props.isLoggedIn;
  
  if (isLoggedIn) {
    return <Show value1={props.value1} value2={props.value2} value3={props.value3} value4={props.value4} loc={props.loc}/>;
  }
  return <Hide />;
}
    
export default Gaining;
