import "./Person.css";

const Person = (props) => {
  return (
    <div className="Person">
      <h2 onClick={props.click}>
        I'm {props.name}, I'm {props.age} years old.
      </h2>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

export default Person;
