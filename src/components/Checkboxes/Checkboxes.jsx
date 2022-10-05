import React from "react";
import classes from "./Checkboxes.module.css";
import { useState } from "react";

const Checkboxes = ({ password, onReplaceLetter, setPassword }) => {
  const [isCheckedUppercase, setIsCheckedUppercase] = useState(true);
  const [isCheckedLowercase, setIsCheckedLowercase] = useState(true);
  const [isCheckedNumber, setIsCheckedNumber] = useState(true);
  const [isCheckedSymbol, setIsCheckedSymbol] = useState(true);

  const includeUppercase = (e) => {
    setIsCheckedUppercase(!isCheckedUppercase);
    if (e.target.checked) {
      const currentPassword = password.toUpperCase();
      return setPassword(currentPassword);
    } else {
      const regexForUppercase = /[A-Z]/g;
      const uppercase = regexForUppercase.test(password);
      if (uppercase === true) {
        const removeUppercase = password.toLowerCase();
        setPassword(removeUppercase);
        console.log("No upper case", removeUppercase);
      }
    }
  };

  const includeLowercase = (e) => {
    setIsCheckedLowercase(!isCheckedLowercase);
    if (e.target.checked && password.includes(/[a-z]/g)) {
      const currentPassword = password.toUpperCase();
      return setPassword(currentPassword);
    } else {
      const regex = /[a-z]/g;
      const lowercase = regex.test(password);
      if (lowercase === true) {
        const removeLowercase = password.toUpperCase();
        setPassword(removeLowercase);
        console.log("No lower case", removeLowercase);
      }
    }
  };

  const includeNumbers = (e) => {
    setIsCheckedNumber(!isCheckedNumber);
    if (e.target.checked) {
      return setPassword(password);
    } else {
      const regex = /[0-9]/g;
      const checkNumbers = regex.test(password);
      if (checkNumbers === true) {
        const removeNumbers = password.replace(regex, onReplaceLetter());
        setPassword(removeNumbers);
        console.log("No numbers", removeNumbers);
      }
    }
  };
  const includeSymbols = (e) => {
    setIsCheckedSymbol(!isCheckedSymbol);
    if (e.target.checked) {
      return setPassword(password);
    } else {
      const regex = /[^a-zA-Z0-9 ]/g;
      const symbols = regex.test(password);
      if (symbols === true) {
        const removeSymbols = password.replace(regex, onReplaceLetter());
        setPassword(removeSymbols);
        console.log("remove symbols", removeSymbols);
      }
    }
  };
  return (
    <div className={classes.checkboxContainer}>
      <div className={classes.checkboxes}>
        <input
          type="checkbox"
          name="uppercase"
          className={classes.checkbox}
          checked={isCheckedUppercase}
          onChange={includeUppercase}
        />
        <label htmlFor="uppercase" className={classes.label}>
          Include Uppercase Letters
        </label>
      </div>
      <div className={classes.checkboxes}>
        <input
          type="checkbox"
          name="lowercase"
          className={classes.checkbox}
          checked={isCheckedLowercase}
          onChange={includeLowercase}
        />
        <label htmlFor="lowercase" className={classes.label}>
          Include Lowercase Letters
        </label>
      </div>
      <div className={classes.checkboxes}>
        <input
          type="checkbox"
          name="numbers"
          className={classes.checkbox}
          onChange={includeNumbers}
          checked={isCheckedNumber}
        />
        <label htmlFor="numbers" className={classes.label}>
          Include Numbers
        </label>
      </div>
      <div className={classes.checkboxes}>
        <input
          type="checkbox"
          name="symbols"
          className={classes.checkbox}
          checked={isCheckedSymbol}
          onChange={includeSymbols}
        />
        <label htmlFor="symbols" className={classes.label}>
          Include Symbols
        </label>
      </div>
    </div>
  );
};

export default Checkboxes;
