import React from "react";
import classes from "./Strength.module.css";

const Strength = ({
  strengthLabel,
  passwordLength,
  strengthColors,
  password,
}) => {
  const border = classes.border;
  const tooWeak = passwordLength <= 2;
  const weak = passwordLength > 2 && passwordLength <= 4;
  const meduim = passwordLength >= 4 && passwordLength < 8;
  const strong = passwordLength >= 8;

  const passwordStengthLabels =
    passwordLength <= 2
      ? "TOO WEAK"
      : passwordLength > 2 && passwordLength <= 4
      ? "WEAK"
      : passwordLength > 4 && passwordLength < 8
      ? "MEDIUM"
      : "STRONG";
  const strengthClasses = tooWeak
    ? classes.tooWeak
    : weak
    ? classes.weak
    : meduim
    ? classes.medium
    : strong
    ? classes.strong
    : "";

  return (
    <div className={classes.strength}>
      <p className={classes.strength_word}>Stength</p>
      <div className={classes.strengthColors}>
        <p className={classes.strengthColors__label}>
          {password ? passwordStengthLabels : ""}
        </p>
        {strengthColors && (
          <div className={classes.strengthColors__divs}>
            <div
              className={`${tooWeak ? strengthClasses : border} ${
                strong ? strengthClasses : border
              } ${weak ? strengthClasses : border} ${
                meduim ? strengthClasses : border
              }`}
            ></div>
            <div
              className={`${weak ? strengthClasses : border} ${
                strong ? strengthClasses : border
              } ${meduim ? strengthClasses : border}`}
            ></div>
            <div
              className={`${strong ? strengthClasses : border} ${
                meduim ? strengthClasses : border
              } ${weak ? strengthClasses : border}`}
            ></div>
            <div className={`${strong ? strengthClasses : border}`}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Strength;
