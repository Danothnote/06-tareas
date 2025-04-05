import React from "react";

export const Counter = () => {
  const [counter, setCounter] = React.useState(0);

  const handleIncrement = () => {
    setCounter(counter + 100);
  };
  const handleDecrement = () => {
    setCounter(counter - 100);
  };
  return (
    <div className="card">
      <h1 className="title">
        Ejercicio 4:
        <br />
        Contador
      </h1>
      <div className="form-container">
        <h3>Contador: {counter}</h3>
      </div>
      <div className="buttons-container">
        <button className="primary-button" onClick={handleIncrement}>
          +100
        </button>
        <button className="secondary-button" onClick={handleDecrement}>
          -100
        </button>
      </div>
    </div>
  );
};
