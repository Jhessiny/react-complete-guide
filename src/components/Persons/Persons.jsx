import React, { Component } from "react";
import Person from "./Person/Person";

class Persons extends Component {
  //   static getDerivedStateFromProps(props, state) {
  //     console.log(" Persons getDerivedStateFromProps", props);
  //     return state;
  //   }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("persons should comp update");
    return true;
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("persons snap before ipdate");
  }

  componentDidUpdate() {
    console.log("comp did update");
  }

  render() {
    console.log("persons redering");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={(event) => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;
