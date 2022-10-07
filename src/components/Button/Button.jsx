import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import classes from "./Button.module.css";

const Button = ({ handleGenerate }) => {
  return (
    <button className={classes.button} onClick={handleGenerate}>
      Generate
      <BsArrowRightShort className={classes.icon} />
    </button>
  );
};

export default Button;
