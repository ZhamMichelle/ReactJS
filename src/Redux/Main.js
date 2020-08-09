import React from 'react';
import {connect} from 'react-redux';
import {useSelector, useDispatch} from 'react-redux'
import {changeFirstName, changeSecondName} from './Store/Actions'
import { bindActionCreators} from 'redux';
import MainComponent from './Components';
import {createStore} from 'redux';
import { Provider} from 'react-redux';
import { rootReducer } from './Store/Reducers'


const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// store.subscribe(()=>{ console.log(store.getState().firstName);})
class Total extends React.Component{
    // constructor(props) {
    //     super(props);
    //     this.state = {Name: ''};
    //   }

    // handleSizeChange =(Name) =>{
    //     this.setState({
    //         Name: Name,     
    //     })
    // }; 

    
    render(){
        const Title = useSelector(state => state.Title)

        return <div>
            <div>       
               {Title}
            </div>
            <div>
            <Provider store={store} >
            <MainComponent />
            {/* <MainComponent handleSizeChange={this.handleSizeChange}/> */}
            </Provider>
            </div>
        </div>
    }
}

export default Total;

// const PutStateToProps = (state) =>{
//     return{
//         firstName: state.firstName,
//     };  
// };

// const PutActionsToProps = (dispatch)=> {
//     return{
//         changeFirstName: bindActionCreators(changeFirstName, dispatch),
//     }
//     }

// export default connect(PutStateToProps)(Total);