import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser } from "../Redux/Action";

const UserLogin = () => {
  const [email, setUserEmail] = useState("");
  const [password, setUserPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginData = {
    email: email,
    password: password,
  };
  const handleLogin = () => {
    dispatch(LoginUser(loginData, navigate));
  };
  const handleSignup = () => {
    navigate("/UserRegistration");
  };
  return (
    <div className="text-center">
      <p className="fa fw-bold fs-1 mt-5">Login</p>
      <div className="col-4 m-auto p-3 shadow rounded border border-dark fs-5 fw-bold mt-3">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email-ID
          </label>
          <input
            type="text"
            className="form-control"
            name="email"
            id="email"
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="ENTER EMAIL"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Enter Password
          </label>
          <input
            type="password"
            className="form-control"
            name="password"
            id="password"
            onChange={(e) => setUserPassword(e.target.value)}
            placeholder="ENTER PASSWORD"
            required
          />
        </div>
        <div className="text-center">
          <Button
            type="submit"
            className="btn btn-primary"
            onClick={()=>{handleLogin()}}
          >
            Submit
          </Button>
        </div>
        <p className="">
          Don't have a account Sign-UP for <em>FREE</em>
        </p>
        <button className="mt-2 btn btn-primary" onClick={handleSignup}>
          Sign-Up
        </button>
      </div>
    </div>
  );
};

export default UserLogin;
