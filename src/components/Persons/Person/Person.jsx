import "./Person.css";
import styled from "styled-components";

const StyledDiv = styled.div`
  max-width: 300px;
  margin: 16px auto;
  border: 1px solid #eeeeee;
  box-shadow: 0 2px 3px #cccccc;
  padding: 16px;
  text-align: center;
`;

const Person = (props) => {
  return (
    // <div className="Person" style={style}>
    <StyledDiv>
      <h2 onClick={props.click}>
        I'm {props.name}, I'm {props.age} years old.
      </h2>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
  );
};

export default Person;
