import React from "react";
import classes from "./Checkboxes.module.css";

const Checkboxes = ({ values, onChangesHandler }) => {
  return (
    <div className={classes.checkboxContainer}>
      <div className={classes.checkboxes}>
        <input
          type="checkbox"
          className={classes.checkbox}
          onChange={onChangesHandler}
          name="hasUpperCase"
          checked={values.hasUpperCase}
        />
        <label htmlFor="uppercase" className={classes.label}>
          Include Uppercase Letters
        </label>
      </div>
      <div className={classes.checkboxes}>
        <input
          type="checkbox"
          className={classes.checkbox}
          onChange={onChangesHandler}
          name="hasLowerCase"
          checked={values.hasLowerCase}
        />
        <label htmlFor="lowercase" className={classes.label}>
          Include Lowercase Letters
        </label>
      </div>
      <div className={classes.checkboxes}>
        <input
          type="checkbox"
          className={classes.checkbox}
          onChange={onChangesHandler}
          name="hasNumbers"
          checked={values.hasNumbers}
        />
        <label htmlFor="numbers" className={classes.label}>
          Include Numbers
        </label>
      </div>
      <div className={classes.checkboxes}>
        <input
          type="checkbox"
          className={classes.checkbox}
          onChange={onChangesHandler}
          name="hasSymbols"
          checked={values.hasSymbols}
        />
        <label htmlFor="symbols" className={classes.label}>
          Include Symbols
        </label>
      </div>
    </div>
  );
};

export default Checkboxes;
