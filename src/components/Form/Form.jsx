import React, { useState } from "react";
import "./Form.css";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handlePassword = (event) => {
    setPassword(event.target.value);
    console.log(password);
  };

  const handleSubmit = (event) => {
    alert(`The email is ${email} and the password is ${password}`);
    event.preventDefault();
  };
 
  return (
    <div className="container  ">
      <form onSubmit={handleSubmit}>

        <h1>LOGIN</h1>

        <div class="mb-3 input-box box1">
     
          <input
            type="email"
            value={email}
            onChange={handleEmail}
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Email Address"
          />
        </div>

        <div class="mb-3 input-box">
   
          <input
            type="password"
            value={password}
            onChange={handlePassword}
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>

        <button type="submit" class="btn btn-primary">
          Login
        </button>

      </form>
    </div>
  );
}
