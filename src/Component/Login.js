import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [error] = useState(false);

  const handleEmail = (e) => {
    setInput({ ...input, email: e.target.value });
    setSubmitted(false);
  };

  const handlePassword = (e) => {
    setInput({ ...input, password: e.target.value });
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const loggeduser = JSON.parse(localStorage.getItem("user"));
    if (
      input.email === loggeduser.email &&
      input.password === loggeduser.password
    ) {
      localStorage.setItem("loggedin", true);
      navigate("/");
    } else {
      alert("Wrong Email or Password");
    }
  };

  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>Login successful!</h1>
      </div>
    );
  };

  return (
    <div className="form">
      <div>
        <h1>User Login</h1>
      </div>

      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label className="label">Email</label>
        </div>
        <div>
          <input
            onChange={handleEmail}
            className="input"
            value={input.email}
            type="email"
          />
        </div>
        <div>
          <label className="label">Password</label>
        </div>
        <div>
          <input
            onChange={handlePassword}
            className="input"
            value={input.password}
            type="password"
          />
        </div>
        <div>
          <button className="btn" type="submit">
            Login
          </button>
        </div>
        <br />
        <div>
          <Link to="/register"> Go To Register Page</Link>
        </div>
      </form>

      <style>
        {`
        .form {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin: 20px;
        }
        h1 {
          text-align: center;
          margin-bottom: 20px;
        }
        .messages {
          margin-bottom: 20px;
        }
        .success {
          color: green;
        }
        .error {
          color: red;
        }
        .label {
          font-weight: bold;
          margin: 10px;
        }
        .input {
          margin-bottom: 10px;
          padding: 10px;
          width: 300px;
        }
        .btn {
          padding: 10px 20px;
          background-color: #4caf50;
          color: white;
          border: none;
          cursor: pointer;
          font-size: 16px;
          border-radius: 4px;
        }
        .btn:hover {
          background-color: #45a049;
        }
        .btn:focus {
          outline: none;
        }
        `}
      </style>
    </div>
  );
};

export default Login;
