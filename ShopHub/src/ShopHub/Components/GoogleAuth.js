import React from "react";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import gapi from "gapi-script";
import { useDispatch } from "react-redux";
import { GoogleAct } from "../Redux/Action/Action";

export const GLogin = () => {
  const dispatch = useDispatch();
  const handleLogin = (res) => {
    dispatch(GoogleAct(res.profileObj))
    window.sessionStorage.setItem("isLoggedIn", "true");

  };


  return (
    <div>
      <GoogleLogin
        clientId="493619045361-h0k70cu8ahcv5vq57sm0u1ffbudsbfco.apps.googleusercontent.com"
        cookiePolicy={"single_host_origin"}
        buttonText="Login"
        onSuccess={handleLogin}
      
        isSignedIn={true}

      />
    </div>
  );
};

export const GLogout = () => {
  const handleLogout = () => {
    window.sessionStorage.clear();
    window.location.reload();
 
  };
  return (
    <div>
      <GoogleLogout
        clientId="493619045361-h0k70cu8ahcv5vq57sm0u1ffbudsbfco.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={handleLogout}
      />
    </div>
  );
};
