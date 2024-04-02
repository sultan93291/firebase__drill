"use client";
import { useState } from "react";
import "./App.css";
import app from "./Config/firebaseConf";
import { getDatabase, ref, set, push } from "firebase/database";

function App() {
  const [User, setUser] = useState({
    name: "",
    email: "",
    roll: "",
    gender: "",
    password: "",
    course: "",
  });

  console.log(User);
  const handleForm = e => {
    const { name, value } = e.target;

    setUser(user => ({ ...user, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { name, email, roll, gender, password, course } = User;
    const db = getDatabase();
    set(push(ref(db, "/users")), {
      user: {
        userName: name,
        email: email,
        roll: roll,
        gender: gender,
        password: password,
        course: course,
      },
    }).then(() => {
      setUser({
        name: "",
        email: "",
        password: "",
        roll: "",
        gender: "",
        course: "",
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
            checked={User.gender === "male"}
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
            checked={User.gender === "female"}
          />
          <label htmlFor="female">female</label>
        </div>
        <div>
          <select
            id="course"
            value={User.course}
            onChange={handleForm}
            name="course"
            placeholder="course"
          >
            <option value="mern"> mern </option>
            <option value="mean">mean</option>
            <option value="networking"> networking </option>
          </select>
        </div>
        <button type="submit">submit data</button>
      </form>
    </>
  );
}

export default App;
