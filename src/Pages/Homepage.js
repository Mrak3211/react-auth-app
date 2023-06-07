import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigation = useNavigate();
  const userName = JSON.parse(localStorage.getItem("user"));
  const handleLogout = () => {
    localStorage.removeItem("loggedin");
    navigation("/login");
  };
  return (
    <div className="form">
      <div>
        <h2>Home Page</h2>
      </div>
      {/* <br /> */}
      <h1> Welcome - {userName.name}!</h1>
      <div>
        <button onClick={handleLogout} className="btn" type="logout">
          Logout
        </button>
      </div>
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
        .label {
                font-weight: bold;
                margin: 10px;
              }
        .input {
                margin-bottom: 10px;
                padding: 5px;
              }
      
        .btn {
                padding: 5px 10px;
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

export default Homepage;
