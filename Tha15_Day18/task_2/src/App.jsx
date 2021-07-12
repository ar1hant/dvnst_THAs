import React from 'react';
import "./styles.css";

var arr = [{title:"Pizza", cals:"56"},
           {title:"Burger", cals:"69"},
           {title:"Coke", cals:"500"},
           {title:"Brownie", cals:"180"},
           {title:"Fried Rice", cals:"90"},
           {title:"Lassania", cals:"200"},
           {title:"Pani Puri", cals:"10"}];

var sum = 0;
for(let i = 0; i < arr.length; i++){
  sum += parseInt(arr[i].cals);
}


const Card = () => {
  return(
    <div className="content">
      {
        arr.map((item, index) =>
          <div className="card" key={index}>
            <h1>{item.title}</h1>
            <h2>you have consumed {item.cals} cals today</h2>
          </div>)
      }
    </div>
  )
}

function App() {
  return (
    <div className="app">
      <h1>Instructions</h1>
      <div className="heading">
        <ul>
          <li>Build a container</li>
          <li>Create a seperate function and use it as a component</li>
          <li>Pass props "calory and food" and call it to main component</li>
        </ul>
      </div>
      <h1>Calorie Read Only</h1>
      <div className="box">
        <Card />
      </div>
    </div>
  );
}

setTimeout(function(){ alert("You have consumed " + sum + " calories"); }, 1);
export default App;