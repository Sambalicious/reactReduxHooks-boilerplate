import React from 'react';
import {useSelector, useDispatch } from 'react-redux'
import './App.css';
import { ADD_NUMBER, SUBSTRACT_NUMBER } from './redux/Types';

function App() {
  
    const dispatch = useDispatch();
    const number = useSelector(state =>state.number.number);
    

  return (
    <div className="App">
      
    <div>
       <h2> status - {number}</h2>
        <button onClick={()=>dispatch({type:ADD_NUMBER})}>add number</button>
        <button onClick={()=>dispatch({type:SUBSTRACT_NUMBER})}>sustract number</button>
    </div>
    </div>
  );
}

export default App;
