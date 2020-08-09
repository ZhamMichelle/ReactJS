import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Gaining from './Gaining';
import PDNew from "./PDNew";



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

interface Props {
  data: any;
}

class TelephoneNew extends React.Component<{}, {value1: any,  value3: string, value4: string, isLoggedIn: boolean, textPD: String}> {

  constructor(props:any) {
    super(props);
    this.state = {
      value1: '',
      value3: '',
      value4: '',
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
    this.setState({value3: event.target.value});
  }

  handleChange1(event:any) {
    this.setState({value4: event.target.value});
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const value3=this.state.value3;
    const value4=this.state.value4;
// var value1=this.props.loc;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.outClick} />;
    } else {
      button = <LoginButton onClick={this.inClick} />;
    }

    return (<div>
      {/* <form onSubmit={() => this.handleSubmit} > */}
        <form>
          <textarea value={this.state.value3} onChange={this.handleChange} placeholder='Enter your address'></textarea>
          <textarea value={this.state.value4} onChange={this.handleChange1} placeholder='Enter your telephone'></textarea>
        {/* <input type="submit" value="Отправить"/> */}
      </form>
      <div>
      <Gaining isLoggedIn={isLoggedIn} value3={value3} value4={value4}/>
        {button}
      </div>
      {/* {value1} */}
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
export default TelephoneNew;
