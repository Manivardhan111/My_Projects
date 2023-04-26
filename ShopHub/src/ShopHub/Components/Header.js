import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { GLogout, gLogin } from "./GoogleAuth";
import { NavDropdown } from "react-bootstrap";

const Header = () => {
  const totalItems = useSelector((state) => state);
  const TotalQty = totalItems.Cart.reduce((total, value) => {
    return value.qty + total;
  }, 0);
  
  const isLoggedIn = window.sessionStorage.getItem("isLoggedIn");

  const user = useSelector((state) => state.GoogleData);

  return (
    <div className="navbar bg-dark text-warning " >
      <div className="fa fs-1 fw-bold ms-5">ShopHub</div>
      <div>
        <ul className="d-flex mx-5 pt-4 fs-3">
          <li className="nav-item">
            <NavLink
              className="nav-link  text-warning"
              aria-current="page"
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link " to="/Products">
              Products
            </NavLink>
          </li>

          {isLoggedIn ? (
            <>
              <NavDropdown title="My Account" id="collasiable-nav-dropdown">
                <NavDropdown.Item>
                  <GLogout />
                </NavDropdown.Item>
              </NavDropdown>
            </>
          ) : (
            <>
              <NavDropdown title="My Account" id="collasiable-nav-dropdown">
                <NavDropdown.Item>
                  <NavLink className="nav-link " to="/Login">
                    Login
                  </NavLink>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <NavLink className="nav-link " to="/Signup">
                    Signup
                  </NavLink>
                </NavDropdown.Item>
              </NavDropdown>
            </>
          )}
          {isLoggedIn ? (
            <li className="text-warning d-flex">
              <em>Hello!:&nbsp;&nbsp; </em>
              <h2>{user.givenName}</h2>
            </li>
          ) : null}
        </ul>
      </div>
      <div className="me-5">
        {" "}
        <NavLink to="/Cart" className="btn btn-outline-warning fs-4">
          <i className="fa fs-2 fa-shopping-cart me-2"></i>Cart ({TotalQty})
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
