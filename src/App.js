import { Component } from "react";
import "./App.css";
// import Person from "./Person/Person";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
  state = {
    name: "Xena",
  };

  changeNameHandler = () => {
    this.setState({ name: "Carla" });
    console.log("HEy");
  };

  inputNameHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  render() {
    // const style = {
    //   backgroundColor: "white",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    // };

    return (
      <div className="App">
        {/* <h1>Hey</h1>
        <button style={style} onClick={() => this.changeNameHandler("Manuel")}>
          Click me
        </button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          hobbies="programm"
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          hobbies="play games"
          click={this.changeNameHandler.bind(this, "André")}
          changed={this.inputNameHandler}
        />
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        /> */}
        <UserInput change={this.inputNameHandler} name={this.state.name} />
        <button onClick={() => this.changeNameHandler("Carla")}>Click</button>
        <UserOutput name={this.state.name} />
        <UserOutput name={this.state.name} />
        <UserOutput name={this.state.name} />
      </div>
    );
  }
}

export default App;
