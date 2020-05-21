import React from 'react';
import logo from './logo.svg';
import './App.css'
import ReactDOM from 'react-dom';

import ToDo from './components/ToDo';


function App() {
  return (
    <div className="App">
     <ToDo />
    </div>
  );
}


const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA