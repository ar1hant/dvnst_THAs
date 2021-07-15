import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './styles.css';

ReactDOM.render(
  <div className="App">
    <div className="Instructions">
      <strong><h1>Instructions</h1></strong>
    <li>pass value and setter of the state to the component as props</li>
    </div>
    <strong><h1>Calorie Read Only</h1></strong>
    <App />
  </div>,
  document.getElementById('root')
);