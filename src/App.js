import React from "react";
import classes from "./App.module.css";
import Button from "./components/Button/Button";
import CharacterLength from "./components/CharacterLength/CharacterLength";
import Checkboxes from "./components/Checkboxes/Checkboxes";
import Password from "./components/Password/Password";
import Strength from "./components/Strength/Strength";

import { useState } from "react";
import { generateRandomPassword } from "./utils";

const App = () => {
  const [password, setPassword] = useState();
  const [passwordLength, setPasswordLength] = useState(5);
  const [strengthColors, setStrengthColors] = useState(false);
  const [error, setError] = useState("");

  const [values, setValues] = useState({
    hasUpperCase: true,
    hasSymbols: true,
    hasNumbers: true,
    hasLowerCase: true,
  });

  const onChangesHandler = (e) => {
    const { name, checked } = e.target;
    setValues({ ...values, [name]: checked });
  };

  const errorMessage = <p>Can not generate password!</p>;

  const handleGenerate = () => {
    const newPassword = generateRandomPassword(values, passwordLength);
    setPassword(newPassword);
    setStrengthColors(true);
    setError(errorMessage);
  };

  return (
    <div className={classes.root}>
      <h1 className={classes.mainHeading}>Password Generator</h1>
      <Password password={password} error={error} errorMessage={errorMessage} />
      <div className={classes.App}>
        <CharacterLength
          passwordLength={passwordLength}
          setPasswordLength={setPasswordLength}
        />
        <Checkboxes values={values} onChangesHandler={onChangesHandler} />
        <Strength
          passwordLength={passwordLength}
          strengthColors={strengthColors}
          password={password}
        />
        <Button handleGenerate={handleGenerate} />
      </div>
    </div>
  );
};

export default App;
