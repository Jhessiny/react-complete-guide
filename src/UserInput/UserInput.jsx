const UserInput = (props) => {
  return <input type="text" onChange={props.change} value={props.name} />;
};

export default UserInput;
