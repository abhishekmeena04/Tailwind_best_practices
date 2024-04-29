import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async () => {
    try {
      const data = { email: username, password: password };
      const res = await axios.post("https://reqres.in/api/login", data);
      console.log(res.data.token);
      if (res.data.token) {
        localStorage.setItem("token", res.data.token);
        navigate("/home");
      }
    } catch (error) {}
  };
  return (
    <div>
      <input
        type="text"
        name="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        placeholder="username"
      />{" "}
      <br /> <br />
      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder="password"
      />{" "}
      <button className="border p-2 border-black" onClick={submitHandler}>
        login
      </button>
    </div>
  );
};

export default Login;
