import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { RegisterUSer } from "../Redux/Action";
import { Button } from "react-bootstrap";

const UserRegistration = () => {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [userConfirmPassword, setUserConfirmPassword] = useState("");
  const [userPhone, setUserPhone] = useState("");
  const userData = {
    name: userName,
    email: userEmail,
    password: userPassword,
    confirmPassword: userConfirmPassword,
    phone: userPhone,
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = () => {
   

    dispatch(RegisterUSer(userData,navigate), );
  };

  return (
    <>
      <div className="border rounded border-dark p-3 fw-bold m-auto col-4 text-center my-5">
        <u>
          <h3 className="mt-2 mb-4">REGISTER/SIGN-UP</h3>
        </u>
        <form>
          <label htmlFor="username">USER NAME</label> <br />
          <input
            type="text"
            id="username"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            required
          ></input>
          <br />
          <label htmlFor="email">E-MAIL</label> <br />
          <input
            id="email"
            type="email"
            onChange={(e) => setUserEmail(e.target.value)}
            value={userEmail}
            required
          />
          <br />
          <label htmlFor="password">PASSWORD</label> <br />
          <input
            id="password"
            type="password"
            onChange={(e) => setUserPassword(e.target.value)}
            value={userPassword}
            required
          />
          <br />
          <label htmlFor="confirmpassword">CONFIRM PASSWORD</label> <br />
          <input
            id="confirmpassword"
            type="password"
            onChange={(e) => setUserConfirmPassword(e.target.value)}
            value={userConfirmPassword}
            required
          />
          <br />
          <label htmlFor="phone">PHONE NUMBER</label> <br />
          <input
            id="phone"
            type="text"
            onChange={(e) => setUserPhone(e.target.value)}
            value={userPhone}
            required
          />
          <br />
          <Button variant="success" className="mt-3" onClick={handleSubmit}>
            submit
          </Button>
          <br />
        </form>
      </div>
    </>
  );
};

export default UserRegistration;
