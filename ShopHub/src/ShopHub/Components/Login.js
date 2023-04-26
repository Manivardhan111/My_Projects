import React from "react";
import { gapi } from "gapi-script";

import { GLogin } from "./GoogleAuth";

const Login = () => {


  return (
    <div className="container border border-dark  rounded align-items-center col-4 pt-3 m-auto mt-3" style={{backgroundColor:"aliceblue"}}>
      {
        <div className="cardBody mx-5 ">
          <h3 className=" text-center pt-2 fs-2 f">Login</h3>
          <div className="card-body">
            <form className="mx-5">
              <div className="mt-2 mb-4 ">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="example emalid@example.com "
            
                />
              </div>
              <div className="mb-4">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                 
                />
              </div>
              <button className="mb-3">Login</button>
              <div className="text-center">
                <GLogin/>
              </div>
            </form>
          </div>
        </div>
      }
    </div>
  );
};

export default Login;
