const Char = (props) => {
  const style = {
    display: "inline-block",
    padding: "5px",
    textAlign: "center",
    margin: "5px",
    border: "1px solid blue",
    cursor: "pointer",
    fontSize: "30px",
  };
  return (
    <div style={style}>
      <div>{props.character} </div>
      <button onClick={props.delete}>delete</button>
    </div>
  );
};

export default Char;
