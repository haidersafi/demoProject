import React, { useState,Component } from "react";
import "./App.css";
import Person from "./Components/Person/Person";

class App extends Component {
  // const [state, setstate] = useState({
  //   persons: {
  //     name: "safi",
  //     age: "22",
  //   }
  // });
  constructor(props){
    super(props);
    this.state={persons:{name:"safi"}}
  }
  changeState = () => {
    // setstate({
    //   persons: {
    //     name: "safi saqlain",
    //     age: "28"
    //   }
    // });
    this.setState({persons:{name:"safisaqlain"}})
  };
  render(){
  return (
    <div className="App">
      <Person name={this.state.persons.name} changeState={this.changeState}></Person>
     
    </div>
  );}
};

export default App;
