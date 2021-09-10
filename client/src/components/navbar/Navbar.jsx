import React, { useContext, useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Navbar.css";
import { myState } from "../../App";
import axios from "axios";
import JWT_decode from "jwt-decode";

const Navbar = () => {
  
  const { user, setUser } = useContext(myState);
  const history = useHistory();
 

  

  useEffect(() => {
    const token = document.cookie.split("=")[1];
   
    if (token) {
      axios
        .get("/about", {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          setUser(res.data.data);
          history.replace("/");
        })
        .catch((err) => console.log(err));
    }
  }, []);

  
  return (
    <div className="container">
      <nav className="navbar navbar-expand-md navbar-light">
        <Link className="navbar-brand" exact to="/">
          Navbar
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <Link className="nav-link" exact to="/">
                HOME{" "}
              </Link>
            </li>
            {user?.email && (
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  ABOUT
                </Link>
              </li>
            )}

            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                CONTACT
              </Link>
            </li>

            {!user || !user.email  ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/signin">
                    SIGNIN
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/signup">
                    SIGN_UP
                  </Link>
                </li>
              </>
            ) : ""}

            {user?.email && (


<li className="nav-item">
<Link className="nav-link" to="/logout">
  Logout
</Link>
</li>
             
            )}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
