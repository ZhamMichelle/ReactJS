import axios from 'axios';
import {Name, Phone, rootReducer} from './ReducersS.js'

function AddCards(){
  debugger;
      axios.post('https://localhost:44387/Api/Card/AddCard/', {Name:rootReducer.Name, Phone:rootReducer.Phone,
       }).then(JSON =>{
      if(JSON.data.Status==='Success'){
          console.log(JSON.data.Status);
          alert("Data save saccessfully");
          // this.props.history.push('/Bookslist')
      }     
      else{
          alert("Data not saved");
          console.log('Status is' + JSON.data.Status==='Success');
          debugger;
      }
      })
    }
  
    export default AddCards;