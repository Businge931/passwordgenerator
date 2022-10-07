import React from "react";
import classes from "./Password.module.css";
import { FaRegCopy } from "react-icons/fa";
import { useState } from "react";

const Password = ({ password, error, errorMessage }) => {
  const [isCopied, setIsCopied] = useState(false);

  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }
  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(password)
      .then(() => {
        // If successful, update the isCopied state value
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const dummyPassword = <p className={classes.dummyPassword}>P4$5W0rD!</p>;

  return (
    <div className={classes.password}>
      <h4 className={classes.password_text}>
        {password ? password : error ? errorMessage : dummyPassword}
      </h4>
      <p className={classes.password_copied}>
        <span className={classes.copied}>{isCopied && "copied"}</span>
        <FaRegCopy className={classes.copiedIcon} onClick={handleCopyClick} />
      </p>
    </div>
  );
};

export default Password;
