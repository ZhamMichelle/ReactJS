import React, {useState} from 'react';
import {connect} from 'react-redux';
import {useSelector, useDispatch} from 'react-redux';
import {changeFirstName, changeSecondName} from './Store/newActions'
import { bindActionCreators} from 'redux';
import MainComponent from './newComponents';
import {createStore} from 'redux';
import { Provider} from 'react-redux';
import { rootReducer } from './Store/newReducers'

const Total = () =>{
  
    const [name, setName] = useState('');

    const handleChange = (Name) => {
        setName(Name);
      };

    // const firstName = useSelector(state => state.firstName)
        // console.log(firstName)
        return <div>
            <div>       
               {name}
            </div>
            <div>
            <MainComponent handleChange={handleChange} />
            </div>
        </div>
}
export default Total;
