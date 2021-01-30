import React, { useState } from "react";

let randomNumber = Math.round(Math.random() * 10);

const App = () => {
  const [value, setValue] = useState("");
  const onChange = e => setValue(e.target.value);
  let results = "";

  const onClick = () => {
    
    const userGuess = value;
    if (userGuess == "") return null;
    if (userGuess == randomNumber)
      return <p >Correct!</p>;
    if (userGuess > randomNumber)
      return <p>Too high, guess again</p>;
    if (userGuess < randomNumber)
      return <p >Too low, guess again</p>;
  };

  results = onClick(value);

  return (
    <>
      <h2>Guess The Number game</h2>
      <p className="lead">Guess a number between 1 and 10.</p>
      <input value={value} type="number" onChange={onChange} />
      <button type="submit" onClick={onClick}>
        GUESS
      </button>
      <br />
      <br />
      {results}
    </>
  );
};

export default App;



