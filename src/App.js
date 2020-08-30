import React, {useState} from 'react';
import {useSelector, useDispatch } from 'react-redux'
import './App.css';
import { ADD_NUMBER, SUBSTRACT_NUMBER } from './redux/Types';
import { addNumber, SubstractNumber } from './redux/action';

function App() {
  
    const dispatch = useDispatch();
    const number = useSelector(state =>state.number.number);
    const [acc, setAcc] = useState(1)
  return (
    <div className="App">
      
    <div>
       <h2> status - {number}</h2>
       <input type='text' value={acc} onChange={(e)=>setAcc(e.target.value)} />
        <button onClick={()=>dispatch({type: ADD_NUMBER,payload:acc})}>add {acc} number</button>
        <button onClick={()=>dispatch(SubstractNumber(acc))}>sustract {acc} number</button>
    </div>
    </div>
  );
}

export default App;
