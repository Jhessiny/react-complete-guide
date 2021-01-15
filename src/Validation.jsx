const Validation = (props) => {
  let validationMessage = "Input is empty. Tap a text.";
  if (props.length > 5) {
    validationMessage = "Long enough";
  } else if (props.length < 5 && props.length > 0) {
    validationMessage = "Too short";
  }

  return <p>{validationMessage}</p>;
};

export default Validation;
