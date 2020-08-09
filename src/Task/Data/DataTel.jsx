import React from 'react';
import classes from './DataTel.module.css'

const DataTel = () => {
    return <data className={classes.data}>
         <div>
            <div >
            <textarea placeholder='Enter your address' className={classes.pd}></textarea>
            </div>
            <div >
            <textarea placeholder='Enter your telephone' className={classes.pd}></textarea>
            </div>
            
        </div>
    </data>
}

export default DataTel;