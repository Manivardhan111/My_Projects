import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import { VerifyUser } from "../Redux/Action";

const UserVerification = () => {
  const user=useSelector((state)=>state.user)

  const [userCode, setUserCode] = useState("");

const dispatch=useDispatch()
  const navigate = useNavigate();
  const handleVerify = () => {
    dispatch(VerifyUser(userCode,navigate))
 
  
 };
  return (
    <div className="m-auto col-3 text-center shadow-sm rounded border border-dark my-5 fs-5 fw-bold ">
   
      <label className="mt-2" htmlFor="verification">Enter Verification Code</label>
      <br />
      <input className="mt-3"
        id="verification"
        onChange={(e) => setUserCode(e.target.value)}
        type="text"
      ></input>
      <br />

      <Button variant="success" className="my-3 "size="md" 
      onClick={handleVerify}
      >
        Verify
      </Button>
    </div>
  );
};

export default UserVerification;
