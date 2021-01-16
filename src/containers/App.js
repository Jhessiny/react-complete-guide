import { Component } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";

import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Jhess", age: 24 },
      { id: 2, name: "Elias", age: 29 },
      { id: 3, name: "Dante", age: 0 },
      { id: 4, name: "Marvin", age: 0 },
    ],
    showPersons: false,
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
  render() {
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.inputNameHandler}
        />
      );
    }

    return (
      <div className="App">
        <Cockpit
          showPersons={this.state.showPersons}
          persons={this.state.persons}
        />
        {persons}
      </div>
    );
  }
}

export default App;
