import { useEffect, useRef, useState } from "react";

export const ManipulateStrings = () => {
  const [text, setText] = useState("");
  const refRemove = useRef();

  useEffect(() => {
    refRemove.current.disabled = text.length === 0 ? true : false;
  }, [text]);

  const addString = () => {
    setText(text + "A");
  };

  const removeString = () => {
    setText(text.slice(0, -1));
  };
  
  return (
    <div className="card">
      <h1 className="title">
        Ejercicio 5:
        <br />
        Manipulación de cadenas de texto
      </h1>
      <div className="form-container">
        <h3>Cadena de entrada:</h3>
        <p>{text}</p>
      </div>
      <div className="buttons-container">
        <button className="primary-button" onClick={addString}>
          +A
        </button>
        <button
          ref={refRemove}
          className="secondary-button"
          onClick={removeString}
        >
          -A
        </button>
      </div>
    </div>
  );
};
