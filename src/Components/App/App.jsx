import React, { Component } from 'react';
import './App.css';
import { CardList, Search } from '..';

class App extends Component {
  //adding state in constructor
  constructor(){
    super()
    /*
    state in react is a plain javascript object.
    */
    this.state = {
        //we are setting this empty state because we loading data 
        //from internet.
        monsters: [],
        searchField: ''
    }
  }

  /*
  lifecycle methods. This are method that excutes automatically
  at different stages in the app. componentDidMount excutes when
  this component is rendered for the first time in the dom element.
  */
  componentDidMount() {
     //fetch function is a javascript method that makes api calls
     fetch("https://jsonplaceholder.typicode.com/users")
     //the response.json() is a promise that returns json like
     .then(response => response.json()) 
     .then(monster => this.setState({ monsters: monster}))
  }


  //Always use arrow functions to set the scope of the this keyword
  handleChange = (e) => {
    this.setState({ searchField: e.target.value }, () => {
      //setState is asychrouns so use this callback to know when the setState is done running.
      console.log('runned')
    })
  }
  
  //the setState take an object, which will be the same object in state but with changed values
  /*
  creating custom component with props
  children are what is written inside the tag of the component eg
  <CardList>Leraning React</CardList>
  now Leraning React is a children and we can access it by calling props.children
   */
  render() {
    //we don't want to change the base array, so we will create another array
    const { monsters, searchField } = this.state
    const filteredMonsters = monsters.filter(monster => 
          monster.name.toLowerCase().includes(searchField.toLocaleLowerCase())
      )

    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <Search placeholder='search monsters' handleChange={ this.handleChange }/>
        <CardList monsters={ filteredMonsters }/>
      </div>
    ) 
  }
}

export default App;
