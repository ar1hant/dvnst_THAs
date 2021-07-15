import React from 'react';
import ReactDOM from 'react-dom';
import Counter from './App';

class App extends React.Component{
  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <div>
        There are 4 counter component instances that each manage their own state.
        <div>
          <Counter/>
          <Counter/>
          <Counter/>
          <Counter/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);