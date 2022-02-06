import { useState, useRef } from "react";

const SimpleInput = (props) => {
  // const [enteredName, setEnteredName] = useState();
  const inputRef = useRef();

  // const nameInputChangeHandler = (e) => {
  //   setEnteredName(e.target.value);
  // };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    // console.log(enteredName);
    const enteredValue = inputRef.current.value;
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          // onChange={nameInputChangeHandler}
          ref={inputRef}
        />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
