import React, { useCallback, useEffect, useRef, useState } from "react";
import "./PG.css";

function PG() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [isNumberAllowed, setNumberAllowed] = useState(false);
  const [isCharAllowed, setCharAllowed] = useState(false);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoprstuvwxyz";
    if (isNumberAllowed) str += "0123456789";
    if (isCharAllowed) str += "!@#$%^&*<>:~";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, isCharAllowed, isNumberAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, isCharAllowed, isNumberAllowed, passwordGenerator]);

  const passwordRef = useRef(null);

  const copyToClipboard = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  return (
    <div className="container">
      <h1>Password Generator</h1>
      <div className="textBox">
        <input
          type="text"
          value={password}
          id="text"
          placeholder="password"
          readOnly
          ref={passwordRef}
        />
        <button type="button" onClick={copyToClipboard}>
          Copy
        </button>
        <br />
        <input
          type="range"
          id="slider"
          min={6}
          max={100}
          value={length}
          onChange={(e) => setLength(e.target.value)}
        />
        <label htmlFor="slider">Length: {length}</label>
        <br />
        <input
          type="checkbox"
          id="char"
          onChange={() => setCharAllowed((prev) => !prev)}
        />
        <label htmlFor="char">Characters</label>
        <br />
        <input
          type="checkbox"
          id="number"
          onChange={() => setNumberAllowed((prev) => !prev)}
        />
        <label htmlFor="number">Numbers</label>
      </div>
    </div>
  );
}

export default PG;
