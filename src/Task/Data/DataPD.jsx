import React from 'react';
import classes from './DataPD.module.css'

const DataPD = () => {
    return <data className={classes.data}>
        <div>
            <div >
            <textarea placeholder='Enter your FirstName' className={classes.pd}></textarea>
            </div>
            <div >
            <textarea placeholder='Enter your SecondName' className={classes.pd}></textarea>
            </div>
            
        </div>
    </data>
}

export default DataPD;