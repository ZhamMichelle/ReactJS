import React from 'react';
import {connect} from 'react-redux';
import {changeFirstName, changeSecondName} from './Store/newActions'
import {useSelector, useDispatch} from 'react-redux'

const MainComponent = (props) => {

    const dispatch = useDispatch()
       
        const firstName = useSelector(state => state.firstName)  //useSelector - маппинг значения из store.
        const secondName = useSelector(state => state.secondName)
        //props.handleChange(firstName);
        return <div>
            <div>
                <input type="text" 
                value={firstName} 
                onChange={(event) => {dispatch(changeFirstName(event.target.value));}} //useDispatch - получение функции store.dispatch в компоненте. for call Action
                placeholder='First name'/>
            </div>
            <div>
                <input type="text" 
                value = {secondName}
                onChange={(event) => {dispatch(changeSecondName(event.target.value));}} 
                placeholder='Second name'/>
            </div>
        </div>
    }

// const PutStateToProps = (state) =>{
    
//     return{
//         firstName: state.firstName,
//         secondName: state.secondName,
//     };  
// };

// export default connect(PutStateToProps)(MainComponent);

export default MainComponent;