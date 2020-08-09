import React from 'react';
import classes from './Header.module.css'
import DataPD from './Data/DataPD';
import DataTel from './Data/DataTel';

const Header = () => {
    // let addPost = () =>{
    //     let text=newPostElement.current.value;
    //     props.addPost(text);
    //     newPostElement.current.value='';

    return <header className={classes.header}>
   <div className={classes.loc}>
       {/* <button>Enter your PD</button> */}
       {/* <button onclick={DataTel}>Enter Address and Tel.</button> */}
   </div>
    </header>
}

export default Header;