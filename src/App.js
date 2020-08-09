import React from 'react';
import './App.css';
import {createStore} from 'redux';
import { Provider} from 'react-redux';
import Total from './NewRedux/newMain'
import TotalFunc from './SundayReduxFunc/TotalFunc'
// import ThirdButtonFunc from './SundayReduxFunc/ThirdButtonFunc'
 import { rootReducer } from './NewRedux/Store/newReducers'
//import { rootReducer } from './SundayReduxFunc/ReducersSFunc'

const store = createStore(rootReducer,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const App = () => {
    console.log("Testing");
    return(<div>
        {/* <Provider store={store} >
    <TotalFunc />
    </Provider> */}

   <Provider store={store} >
    <Total />
    </Provider>

</div>
    );
}

export default App;
