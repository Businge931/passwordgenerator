import React from "react";
import classes from "./Strength.module.css";

const Strength = ({ passwordLength, strengthColors, password }) => {
  const tooWeak = passwordLength <= 2;
  const weak = passwordLength > 2 && passwordLength <= 4;
  const meduim = passwordLength > 4 && passwordLength < 8;
  const strong = passwordLength >= 8;

  const passwordStengthLabels =
    passwordLength <= 2
      ? "TOO WEAK"
      : passwordLength > 2 && passwordLength <= 4
      ? "WEAK"
      : passwordLength > 4 && passwordLength < 8
      ? "MEDIUM"
      : "STRONG";

  const strengthBars = [
    {
      id: 1,
      class: tooWeak
        ? classes.tooWeak
        : weak
        ? classes.weak
        : meduim
        ? classes.medium
        : strong
        ? classes.strong
        : classes?.emptyStrength,
    },
    {
      id: 2,
      class: tooWeak
        ? classes.emptyStrength
        : weak
        ? classes.weak
        : meduim
        ? classes.medium
        : strong
        ? classes.strong
        : classes?.emptyStrength,
    },
    {
      id: 3,
      class: tooWeak
        ? classes.emptyStrength
        : weak
        ? classes.emptyStrength
        : meduim
        ? classes.medium
        : strong
        ? classes.strong
        : classes?.emptyStrength,
    },
    {
      id: 4,
      class: tooWeak
        ? classes.emptyStrength
        : weak
        ? classes.emptyStrength
        : meduim
        ? classes.emptyStrength
        : strong
        ? classes.strong
        : classes?.emptyStrength,
    },
  ];

  return (
    <div className={classes.strength}>
      <p className={classes.strength_word}>Stength</p>
      <div className={classes.strengthColors}>
        <p className={classes.strengthColors__label}>
          {password ? passwordStengthLabels : ""}
        </p>
        {strengthColors && (
          <div className={classes.strengthColors__divs}>
            {strengthBars.map((item) => (
              <div
                key={item?.id}
                className={`${classes.strengthColors__div} ${item.class}`}
              ></div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Strength;
