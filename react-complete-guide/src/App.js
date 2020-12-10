import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {name : "Barbara", age : "24"},
      {name : "Lornah" ,age : "25"},
      {name : "Barbz", age : "100"}
    ]
  }
  
    switchNameHandler = () => {
        // console.log('Was Clicked!')
        // Do not do this(you can not change state directly) this.state.persons[0].name = "Sentinel";
        this.setState({
          persons : [
            {name : "Blair", age : "24"},
            {name : "Lornah" ,age : "25"},
            {name : "Barbz", age : "10"}
          ]
        })
    }
    nameChangeHandler = (event) => {
      this.setState({
        persons : [
          {name : "Blair", age : "24"},
          {name : "Lornah" ,age : "25"},
          {name : event.target.value, age : "10"}
        ]
      })

    }
  render() {
    const style = {
        backgroundColor : "white",
        font : "inherit",
        border : "1px solid blue",
        padding : " 8px",
        cursor : "pointer"
    };
    return (
      <div className="App">
        <h1>Hi, i am a react app</h1>
        <p>This is really working!</p>
        <button 
        style = {style}
        onClick = {this.switchNameHandler}>Switch Name</button>
        <Person
          name = {this.state.persons[0].name}
          age = {this.state.persons[0].age}/>
        <Person
          name = {this.state.persons[1].name} 
          age = {this.state.persons[1].age}/>
        <Person 
           name = {this.state.persons[2].name} 
           age = {this.state.persons[2].age}
           click = {this.switchNameHandler.bind(this,'Barbz!')}
           changed = {this.nameChangeHandler}>My Hobbies : Racing</Person>
      </div>
    );
  }
}

export default App;
