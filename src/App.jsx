"use client";
import { useState } from "react";
import "./App.css";
import app from "./Config/firebaseConf";
import { getDatabase, ref, set } from "firebase/database";

function App() {
  const [User, setUser] = useState({
    name: "",
    email: "",
    roll: "",
    gender: "",
    password: "",
  });

  console.log(User);
  const handleForm = e => {
    const { name, value } = e.target;

    setUser(user => ({ ...user, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, roll, gender, password } = User;
    const db = getDatabase();
    set(ref(db, "/users" + roll), {
      user: {
        userName: name,
        email: email,
        roll: roll,
        gender: gender,
        password: password,
      },
    }).then(() => {
      setUser({
        name: "",
        email: "",
        password: "",
        roll: "",
        gender: "",
      });
    });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={User.name}
          onChange={handleForm}
          name="name"
        />
        <input
          type="email"
          value={User.email}
          onChange={handleForm}
          name="email"
        />
        <input
          type="number"
          value={User.roll}
          onChange={handleForm}
          name="roll"
        />
        <input
          type="password"
          onChange={handleForm}
          name="password"
          value={User.password}
        />
        <div>
          <input
            type="radio"
            id="male"
            onChange={handleForm}
            name="gender"
            value={"male"}
          />
          <label htmlFor="male" value="male">
            male
          </label>
          <input
            type="radio"
            id="female"
            onChange={handleForm}
            name="gender"
            value={"female"}
          />
          <label htmlFor="female">female</label>
        </div>
        <button type="submit">submit data</button>
      </form>
    </>
  );
}

export default App;
