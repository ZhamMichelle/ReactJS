import React from 'react';
import {connect} from 'react-redux';
import {changeFirstName, changeSecondName} from './Store/Actions'
import { bindActionCreators} from 'redux';

class MainComponent extends React.Component{
    render(){
        const dispatch = this.props.dispatch;
        const {firstName, secondName, changeFirstName, changeSecondName} = this.props;

        // this.props.handleSizeChange(firstName);

        
        return <div>
            <div>
                <input type="text" 
                // value={this.props.firstName}
                value={firstName} 
                // onChange={(event) => {dispatch(changeFirstName(event.target.value));}} 
                onChange={(event) => changeFirstName(event.target.value)} 
                placeholder='First name'/>
            </div>
            <div>
                <input type="text" 
                // value={this.props.secondName}
                value = {secondName} 
                // onChange={(event) => {dispatch(changeSecondName(event.target.value));}} 
                onChange={(event) => changeSecondName(event.target.value)}
                placeholder='Second name'/>
            </div>
    <div>{`${this.props.firstName} ${this.props.secondName}`}</div>
        </div>
    }
}

const PutStateToProps = (state) =>{
    
    return{
        firstName: state.firstName,
        secondName: state.secondName,
    };  
};

const PutActionsToProps = (dispatch)=> {
return{
    changeFirstName: bindActionCreators(changeFirstName, dispatch),
    changeSecondName: bindActionCreators(changeSecondName, dispatch),
}
}

export default connect(PutStateToProps, PutActionsToProps)(MainComponent);