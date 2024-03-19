import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
const Home = () => {
  const {loginWithRedirect,isAuthenticated,user,logout}=useAuth0()
  const isUser=isAuthenticated && user

  return <div> 
  {isUser?    <button onClick={()=>{logout({returnTo:window.location.orogin})}}>logout</button>
:<button onClick={loginWithRedirect}>login</button>}
  </div>;
};

export default Home;
