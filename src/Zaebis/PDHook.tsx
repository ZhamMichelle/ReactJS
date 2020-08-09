import React, { useState, Component } from "react";
import db from './../../db.json';


function PDHook (props:any) {

  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
const [database, setDatabase] = useState(db);
 
    localStorage.setItem('myKey1', value1);
    localStorage.setItem('myKey2', value2);
    var localValue1 = localStorage.getItem('myKey1');
    var localValue2 = localStorage.getItem('myKey2');

    function handleChange(event:any) {
      setValue1(event.target.value);
    }
  
    function handleChange1(event:any) {
      setValue2(event.target.value);
    }
  
    // const filterData = setValue1? setDatabase.filter(row => row.someProperty.indexOf(setValue1) > -1) : setDatabase;

    return (<div>
        <form>
          <textarea value={value1} onChange={handleChange}  placeholder='Enter your FirstName'></textarea>
          <textarea value={value2} onChange={handleChange1} placeholder='Enter your SecondName'></textarea>   
      </form>
      <div>
      {/* <Helper value1={value1} value2={value2}/> */}
      {/* <TelephoneNew value1={value1} value2={valu/le2} /> */}
      </div>
      {/* {localValue} */}
      </div>
    );
  
}

export default PDHook;
