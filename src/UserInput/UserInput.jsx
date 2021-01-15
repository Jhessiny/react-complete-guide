const UserInput = (props) => {
  return (
    <input
      type="text"
      className="Input"
      onChange={props.change}
      value={props.name}
    />
  );
};

export default UserInput;
