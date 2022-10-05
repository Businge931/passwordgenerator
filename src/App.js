import React from "react";
import classes from "./App.module.css";
import Button from "./components/Button/Button";
import CharacterLength from "./components/CharacterLength/CharacterLength";
import Checkboxes from "./components/Checkboxes/Checkboxes";
import Password from "./components/Password/Password";
import Strength from "./components/Strength/Strength";

import { useState } from "react";

const App = () => {
  const [password, setPassword] = useState();
  const [passwordLength, setPasswordLength] = useState(5);
  const [strengthLabel, setStrengthLabel] = useState("");
  const [strengthColors, setStrengthColors] = useState(false);

  const generateRandomString = (myLength) => {
    const chars =
      "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890`!@#$%^&*()_+-={};':\\|,.<>/?~";
    const randomArray = Array.from(
      { length: myLength },
      () => chars[Math.floor(Math.random() * chars.length)]
    );
    const randomString = randomArray.join("");
    return randomString;
  };
  const generateRandomLetter = (myLength = 1) => {
    const chars = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
    const randomArray = Array.from(
      { length: myLength },
      () => chars[Math.floor(Math.random() * chars.length)]
    );
    const randomString = randomArray.join("");
    return randomString;
  };

  return (
    <div className={classes.root}>
      <h1 className={classes.mainHeading}>Password Generator</h1>
      <Password password={password} />
      <div className={classes.App}>
        <CharacterLength
          passwordLength={passwordLength}
          setPasswordLength={setPasswordLength}
        />
        <Checkboxes
          password={password}
          setPassword={setPassword}
          onReplaceLetter={generateRandomLetter}
        />
        <Strength
          passwordLength={passwordLength}
          strengthLabel={strengthLabel}
          strengthColors={strengthColors}
          password={password}
        />
        <Button
          onGeneratePassword={generateRandomString}
          onSetPassword={setPassword}
          passwordLength={passwordLength}
          onSetStrengthLabel={setStrengthLabel}
          onsetStrengthColors={setStrengthColors}
        />
      </div>
    </div>
  );
};

export default App;
