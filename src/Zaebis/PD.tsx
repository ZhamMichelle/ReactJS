import React from "react";
import { Grid, Typography} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
// import Post from './Post'

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

// dataPage: {
//   posts: [{firstName: 'hgj jj'}]
// }

// const MyPosts = (props:any) => {
//   let postElements = props.posts.map((post: any) => <Post messages={post.firstName} />
//   )
// }


class PD extends React.Component<{}, { value1: string, value2: string, isLoggedIn: boolean, textPD: String}> {
// const PD = (props) => {
  // classes = useStyles({});

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

//  handleSubmit(event:any) {
//     // alert(this.state.value1);
//     // alert(this.state.value2);
//    let text=this.state.value1;
//   //  debugger;
//     // return(
//     //      <div>{text}</div>
//     //     );
//     event.preventDefault();
//   }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    const value1=this.state.value1;
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
      <Greeting isLoggedIn={isLoggedIn} value1={value1} value2={value2}/>
        {button}
      </div>
      </div>
    );
  }
}

function UserGreeting(props:any) {
  // const value1 = props.this.state.value1;
  return <div>
    <div>{props.value1}</div>
    <div>{props.value2}</div>
    {/* <div>Welcome</div> */}
  </div>;
}

function GuestGreeting(props:any) {
  return <div>Данные скрыты</div>;
}

function Greeting(props:any) {

  const isLoggedIn = props.isLoggedIn;
  
  if (isLoggedIn) {
    return <UserGreeting value1={props.value1} value2={props.value2}/>;
  }
  return <GuestGreeting />;
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
export default PD;
