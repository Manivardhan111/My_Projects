import React from "react";
import { GLogin } from "./GoogleAuth";


const Signup = () => {


  return (
    <div className="container col-3 border border-dark">
      <div className="cardbody">
        <div className="card-header text-center">
          <h5 className="fa fw-bold fs-2">Signup</h5>
          <hr/>
        </div>
    <div>
          <form className="mx-5">
            <div >
              <label htmlFor="userName" className="form-label">
                User Name
              </label>
              <input
                id="name"
                type="text"
                className="form-control"
                required
              ></input>
            </div>
            <div className="">
              <label htmlFor="emailID" className="form-label">
                Email-Id
              </label>
              <input
                id="emailId"
                type="email"
                className="form-control"
                required
              ></input>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                className="form-control"
                required
              ></input>
            </div>
            <div>
              <label htmlFor="comfirmPassword">Confirm Password</label>
              <input
                id="comfirmPassword"
                type="password"
                className="form-control"
                required
              ></input>
            </div>
            <div className="pt-3 fa fw-light fs-3">
              <button
                className="btn btn-primary "
               
              >
                SignUp
              </button>
              <div className="text-center m-auto mx-5" >
              <p >OR Login With</p>
              <GLogin/>
              </div>
            </div>
          </form>
          </div>
        </div>
      </div>
  
  );
};

export default Signup;
