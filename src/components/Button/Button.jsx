import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import classes from "./Button.module.css";

const Button = ({
  onGeneratePassword,
  onSetPassword,
  passwordLength,
  onSetStrengthLabel,
  onsetStrengthColors,
  onChangePassword,
}) => {
  const generatePasswordHandler = () => {
    const generatePassword = onGeneratePassword(passwordLength);
    onSetPassword(generatePassword);
    onsetStrengthColors(true);
  };

  return (
    <button className={classes.button} onClick={generatePasswordHandler}>
      Generate
      <BsArrowRightShort className={classes.icon} />
    </button>
  );
};

export default Button;
