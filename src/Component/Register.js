import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (e) => {
    setInput({ ...input, name: e.target.value });
    setSubmitted(false);
  };

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
    if (input.name === "" || input.email === "" || input.password === "") {
      setError(true);
    } else {
      localStorage.setItem("user", JSON.stringify(input));
      navigate("/login");
      setSubmitted(true);
      setError(false);
    }
  };

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {input.name} successfully registered!!</h1>
      </div>
    );
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

  return (
    <div className="form">
      <div>
        <h1>User Registration</h1>
      </div>

      <div className="messages">
        {errorMessage()}
        {successMessage()}
      </div>

      <form onSubmit={handleSubmit}>
        <label className="label">Name :</label>
        <input
          onChange={handleName}
          className="input"
          value={input.name}
          type="text"
        />

        <label className="label">Email :</label>
        <input
          onChange={handleEmail}
          className="input"
          value={input.email}
          type="email"
        />

        <label className="label">Password :</label>
        <input
          onChange={handlePassword}
          className="input"
          value={input.password}
          type="password"
        />
        <br />
        <div>
          <button className="btn" type="submit">
            Register
          </button>
        </div>
        <br />
        <div>
          <Link to="/login"> Go To Login Page</Link>
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
        div {
          display: flex;
          justify-content: center;
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
          padding: 5px;
        }

        .btn {
          padding: 10px 20px;
          background-color: #4caf50;
          color: white;
          border: none;
          cursor: pointer;

        }

        .btn:hover {
          background-color: #45a049;
        }
      `}
      </style>
    </div>
  );
};

export default Register;
