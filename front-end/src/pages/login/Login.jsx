import React, { useState } from "react";
import "./Login.scss";
import {useNavigate } from 'react-router-dom'
import newRequest from "../../utils/newRequest";



const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate()
  

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await newRequest.post('/api/v1/auth/login',{username, password})
      localStorage.setItem("currentUser", JSON.stringify(response.data))
      navigate("/")
      console.log(response.data);
      console.log("ndvcjavdcj")
    } catch (error) {
      setError(error.response.data);
    }
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <h1>Sign in</h1>

        <label htmlFor="">Username</label>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <label htmlFor="">Password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        {error && error}
      </form>
    </div>
  );
};

export default Login;

