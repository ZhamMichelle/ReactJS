import React, { useState } from "react";
import Gaining from './Gaining';

function TelephoneHook () {

  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  function inClick(props:any) {
    setIsLoggedIn(true);
  }
  function outClick(props:any) {
    setIsLoggedIn(false);
  }

  function handleChange(event:any) {
    setValue3(event.target.value);
  }

  function handleChange1(event:any) {
    setValue4(event.target.value);
  }


    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={outClick} />;
    } else {
      button = <LoginButton onClick={inClick} />;
    }

    return (<div>
        <form>
          <textarea value={value3} onChange={handleChange} placeholder='Enter your address'></textarea>
          <textarea value={value4} onChange={handleChange1} placeholder='Enter your telephone'></textarea>
      </form>
      <div>
      <Gaining isLoggedIn={isLoggedIn} value1={localStorage.getItem('myKey1')} value2={localStorage.getItem('myKey2')}
        value3={value3} value4={value4}/>
        {button}
      </div>
    
      </div>
    );
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
export default TelephoneHook;
