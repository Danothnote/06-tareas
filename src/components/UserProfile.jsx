import { useRef, useState } from "react";

export const UserProfile = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);
  const [email, setEmail] = useState("");
  const [userData, setUserData] = useState({ name: "", age: 0, email: "" });

  const refAge = useRef();

  const handleName = () => {
    setName(event.target.value);
  };

  const handleAge = () => {
    setAge(Number(event.target.value));
  };

  const handleEmail = () => {
    setEmail(event.target.value);
  };

  const resetForm = () => {
    setName("");
    setAge(0);
    refAge.current.value = "";
    setEmail("");
    setUserData({ name: "", age: 0, email: "" });
  };

  const updateUser = () => {
    if (
      !name ||
      !age > 0 ||
      !email.match(/^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim)
    ) {
      alert("Por favor, completa todos los campos");
      return;
    }
    setUserData({ name: name, age: age, email: email });
  };

  return (
    <div className="card">
      <h1 className="title">
        Ejercicio 2 y 3:
        <br />
        Perfil de usuario
      </h1>
      <div className="form-container">
        <h3>Nombre:</h3>
        <input
          className="txt-input"
          type="text"
          placeholder="Nombre"
          value={name}
          onInput={handleName}
        />
        <h3>Edad:</h3>
        <input
          ref={refAge}
          className="txt-input"
          type="number"
          placeholder="Edad"
          min={0}
          onInput={handleAge}
        />
        <h3>Email:</h3>
        <input
          className="txt-input"
          type="email"
          placeholder="Email"
          value={email}
          onInput={handleEmail}
        />
      </div>
      <div className="buttons-container">
        <button className="primary-button" onClick={updateUser}>
          Actualizar
        </button>
        <button className="secondary-button" onClick={resetForm}>
          Resetear
        </button>
      </div>
      <hr />
      <div className="data-container">
        <span className="label">Nombre: </span>
        <span>{userData.name}</span>
      </div>
      <div className="data-container">
        <span className="label">Edad: </span>
        <span>{userData.age}</span>
      </div>
      <div className="data-container">
        <span className="label">Email: </span>
        <span>{userData.email}</span>
      </div>
    </div>
  );
};
