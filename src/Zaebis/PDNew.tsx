import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Gaining from './Gaining';
import TelephoneNew from "./TelephoneNew";

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



class PDNew extends React.Component<{}, { value1: string, value2: string, isLoggedIn: boolean, textPD: String}> {

  constructor(props:any) {
    super(props);
    this.state = {
      value1: '',
      value2: '',
      isLoggedIn: false,
      textPD: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleChange1 = this.handleChange1.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.inClick = this.inClick.bind(this);
    this.outClick = this.outClick.bind(this);
  }

  inClick() {
    this.setState({isLoggedIn: true});
  }
  outClick() {
    this.setState({isLoggedIn: false});
  }

  handleChange(event:any) {
    this.setState({value1: event.target.value});
  }

  handleChange1(event:any) {
    this.setState({value2: event.target.value});
  }

  render() {
    localStorage.setItem('myKey', this.state.value1);
    var localValue = localStorage.getItem('myKey');
console.log(localValue); 

    const isLoggedIn = this.state.isLoggedIn;
    var value1=localValue;
    const value2=this.state.value2;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.outClick} />;
    } else {
      button = <LoginButton onClick={this.inClick} />;
    }

    return (<div>
      {/* <form onSubmit={() => this.handleSubmit} > */}
        <form>
          <textarea value={this.state.value1} onChange={this.handleChange} placeholder='Enter your FirstName'></textarea>
          <textarea value={this.state.value2} onChange={this.handleChange1} placeholder='Enter your SecondName'></textarea>   
        {/* <input type="submit" value="Отправить"/> */}
      </form>
      <div>
      <Gaining value1={value1} value2={value2}/>
      {/* <TelephoneNew loc258={localValue}/> */}
        {button}
      </div>
      {localValue}
      </div>
    );
  }
}

function LoginButton(props:any) {
  return (
    <button onClick={props.onClick}>
      Скрыть
    </button>
  );
}

function LogoutButton(props:any) {
  return (
    <button onClick={props.onClick}>
      Показать
    </button>
  );
  }
export default PDNew;
