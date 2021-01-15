import { Component } from "react";
import "./App.css";
import Person from "./Person/Person";
import Validation from "./Validation";
import CharComponent from "./CharComponent";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Jhess", age: 24 },
      { id: 2, name: "Elias", age: 29 },
      { id: 3, name: "Dante", age: 0 },
      { id: 4, name: "Marvin", age: 0 },
    ],
    showPersons: false,
    input: "",
  };

  inputNameHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); slice copy the array
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  countChar = (e) => {
    let value = e.target.value;
    this.setState({
      input: value,
    });
  };

  deleteChar = (charId) => {
    const chars = [...this.state.input.split("")];
    chars.splice(charId, 1);
    const input = chars.join("");
    this.setState({ input: input });
  };
  render() {
    const charList = this.state.input.split("").map((ch, index) => {
      return (
        <CharComponent
          character={ch}
          key={index}
          delete={() => this.deleteChar(index)}
        />
      );
    });

    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                changed={(event) => this.inputNameHandler(event, person.id)}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hey</h1>
        <button style={style} onClick={this.togglePersonsHandler}>
          Click me
        </button>
        {persons}
        <input onChange={this.countChar} value={this.state.input} />
        <p> value length: {this.state.input.length}</p>
        <Validation length={this.state.input.length} />
        {charList}
      </div>
    );
  }
}

export default App;
