import React from "react";
import { Link, Outlet } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import { FaTwitter,FaInstagram,FaFacebook } from "react-icons/fa";
import { useUserContext } from '../context/user_context'

const Layout = () => {
  

  const {loginWithRedirect,isAuthenticated,user,logout}=useAuth0()
  const { myUser } = useUserContext()

  const isUser=isAuthenticated && user
  console.log('what is user:',user.nickname)
  return (
    
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="javascript:void(0)">
            Ownly
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/buy" className="nav-link">
                  Buy
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/rent" className="nav-link">
                  Rent
                </Link>
              </li>
            </ul>
            <form className="d-flex mx-2">
              {/* <button className="btn btn-primary mx-2" type="button">
                Login
              </button>
              <button className="btn btn-primary" type="button">
                Sign Up
              </button> */}
               {isUser?    <button className="btn btn-primary mx-auto" type="button" onClick={()=>{logout({returnTo:window.location.orogin})}}>logout</button>
:<button className="btn btn-primary mx-auto" type="button" onClick={loginWithRedirect}>login</button>}
            </form>
          </div>
        </div>
      </nav>

      <Outlet />
      <footer className="footer">
        <div className="row">
          <div class="col-md-4 offset-md-2 mx-auto ">
            <form>
              <h5>Subscribe to our newsletter</h5>
              <p>Monthly digest of what's new and exciting from us.</p>
              <div class="d-flex flex-column flex-sm-row w-100 gap-2">
                <label for="newsletter1" class="visually-hidden">
                  Email address
                </label>
                <input
                  id="newsletter1"
                  type="text"
                  class="form-control"
                  placeholder="Email address"
                />
                <button class="btn btn-primary" type="button">
                  Subscribe
                </button>
                <div></div>
              </div>
            </form>
          </div>
          <div className="col-4 footer-right mx-auto">
            <p>Follow us </p>
            <div id="social">
           <p> <FaTwitter size={46}/></p>
            <p><FaInstagram size={46}/></p>
        <p>  <FaFacebook size={46}/></p>
            </div>
          
          </div>
        </div>
        <div className="row">
          <p className="col-4 mx-auto pt-4">© 2024 Ownly, Inc. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Layout;
