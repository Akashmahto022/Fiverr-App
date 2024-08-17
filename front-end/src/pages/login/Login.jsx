import React from "react";
import "./Login.scss";

const Login = () => {
  return (
    <div className="login">
      <form action="">

        <h1>Sign in</h1>
        <label htmlFor="">Username</label>
        <input type="text" name="username" placeholder="username" />
        <label htmlFor="">Password</label>
        <input type="password" name="password" placeholder="password" />
        <button>Login</button>
        
      </form>
    </div>
  );
};

export default Login;
