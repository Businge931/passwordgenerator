const chars =
  "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz1234567890`!@#$%^&*()_+-={};':\\|,.<>/?~";

const regexForLowercase = /[a-z]/g;
const regexForUppercase = /[A-Z]/g;
const regexForNumbers = /[0-9]/g;
const regexForSymbols = /[^a-zA-Z0-9 ]/g;

const withoutUppercaseLetters = chars.match(regexForLowercase);
const withoutLowercaseLetters = chars.match(regexForUppercase);
const withNumbers = chars.match(regexForNumbers);
const withSymbols = chars.match(regexForSymbols);
const withUppercaseLetters = chars.match(regexForUppercase);
const withLowercaseLetters = chars.match(regexForLowercase);

const randomPassGenerator = (length, chars) => {
  const randomArray = Array.from(
    { length: length },
    () => chars[Math.floor(Math.random() * chars.length)]
  );
  const randomPassword = randomArray.join("");
  return randomPassword;
};

export const generateRandomPassword = (values, passwordLength) => {
  let newCharSet = chars;
  if (
    values?.hasUpperCase &&
    values?.hasLowerCase &&
    values?.hasNumbers &&
    values?.hasSymbols
  ) {
    newCharSet = chars;
  } else {
    if (
      !values?.hasUpperCase &&
      values?.hasLowerCase &&
      values?.hasNumbers &&
      values?.hasSymbols
    ) {
      newCharSet = withoutUppercaseLetters.concat(withNumbers, withSymbols);
    } else if (
      values?.hasUpperCase &&
      !values?.hasLowerCase &&
      values?.hasNumbers &&
      values?.hasSymbols
    ) {
      newCharSet = withoutLowercaseLetters.concat(withNumbers, withSymbols);
    } else if (
      values?.hasUpperCase &&
      values?.hasLowerCase &&
      !values?.hasNumbers &&
      values?.hasSymbols
    ) {
      newCharSet = withUppercaseLetters.concat(
        withLowercaseLetters,
        withSymbols
      );
    } else if (
      values?.hasUpperCase &&
      values?.hasLowerCase &&
      values?.hasNumbers &&
      !values?.hasSymbols
    ) {
      newCharSet = withUppercaseLetters.concat(
        withNumbers,
        withLowercaseLetters
      );
    }

    //TWO CHECKED BOXES
    else if (
      !values?.hasUpperCase &&
      !values?.hasLowerCase &&
      values?.hasNumbers &&
      values?.hasSymbols
    ) {
      newCharSet = withNumbers.concat(withSymbols);
    } else if (
      !values?.hasUpperCase &&
      values?.hasLowerCase &&
      !values?.hasNumbers &&
      values?.hasSymbols
    ) {
      newCharSet = withLowercaseLetters.concat(withSymbols);
    } else if (
      !values?.hasUpperCase &&
      values?.hasLowerCase &&
      values?.hasNumbers &&
      !values?.hasSymbols
    ) {
      newCharSet = withNumbers.concat(withLowercaseLetters);
    } else if (
      values?.hasUpperCase &&
      !values?.hasLowerCase &&
      !values?.hasNumbers &&
      values?.hasSymbols
    ) {
      newCharSet = withUppercaseLetters.concat(withSymbols);
    } else if (
      values?.hasUpperCase &&
      !values?.hasLowerCase &&
      values?.hasNumbers &&
      !values?.hasSymbols
    ) {
      newCharSet = withLowercaseLetters.concat(withSymbols);
    } else if (
      values?.hasUpperCase &&
      values?.hasLowerCase &&
      !values?.hasNumbers &&
      !values?.hasSymbols
    ) {
      newCharSet = withUppercaseLetters.concat(withLowercaseLetters);
    }
    //ONLY ONE CHECKED
    else if (
      values?.hasUpperCase &&
      !values?.hasLowerCase &&
      !values?.hasNumbers &&
      !values?.hasSymbols
    ) {
      newCharSet = withUppercaseLetters;
    } else if (
      !values?.hasUpperCase &&
      values?.hasLowerCase &&
      !values?.hasNumbers &&
      !values?.hasSymbols
    ) {
      newCharSet = withLowercaseLetters;
    } else if (
      !values?.hasUpperCase &&
      !values?.hasLowerCase &&
      values?.hasNumbers &&
      !values?.hasSymbols
    ) {
      newCharSet = withNumbers;
    } else if (
      !values?.hasUpperCase &&
      !values?.hasLowerCase &&
      !values?.hasNumbers &&
      values?.hasSymbols
    ) {
      newCharSet = withSymbols;
    } else if (
      !values?.hasUpperCase &&
      !values?.hasLowerCase &&
      !values?.hasNumbers &&
      !values?.hasSymbols
    ) {
      return;
    }
  }

  return randomPassGenerator(passwordLength, newCharSet);
};
