// import React, { useState } from "react";

function Form({ handleFirstNameChange, firstName, handleLastNameChange, lastName, handleNewsetterChange, newsetter }) {

  /*
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Henry");
  const [newsetter, setNewsetter] = useState(false)

  // updating state based on event.target.value, which causes a re-render
  const handleFirstNameChange = e => {
    setFirstName(e.target.value)
  }

  const handleLastNameChange = e => {
    setLastName(e.target.value)
  }

  function handleNewsletterChange(e) {
    setNewsetter(e.target.checked)  // .checked, not .value!
  }
  */

  // onChange will fire every time the value of an input changes
  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName} />
      <input type="text" onChange={handleLastNameChange} value={lastName} />
      <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
      <input type="checkbox" id="newsletter" onChange={handleNewsetterChange} checked={newsetter} /> {/* checked instead of value */}
      <button type="submit">Submit</button>
    </form>
  );

}

export default Form;
