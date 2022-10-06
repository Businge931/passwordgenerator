import React from "react";
import classes from "./CharacterLength.module.css";

const CharacterLength = ({ passwordLength, setPasswordLength }) => {
  const manageLength = (e) => {
    setPasswordLength(e.target.value);
  };

  return (
    <>
      <div className={classes.length}>
        <p className={classes.length_word}>Character Length</p>
        <p className={classes.length_number}>{passwordLength}</p>
      </div>
      <input
        type="range"
        min="2"
        max="10"
        step="2"
        defaultValue={5}
        onChange={manageLength}
        className={classes.range}
      />
    </>
  );
};

export default CharacterLength;
