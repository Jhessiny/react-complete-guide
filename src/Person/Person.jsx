import "./Person.css";
import Radium from "radium";

const Person = (props) => {
  const style = {
    "@media(min-width: 500px)": {
      width: "450px",
    },
  };
  return (
    <div className="Person" style={style}>
      <h2 onClick={props.click}>
        I'm {props.name}, I'm {props.age} years old.
      </h2>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Radium(Person);
