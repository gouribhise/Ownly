import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import {Advert, Guide, Hero,Services, Tools} from '../components'
const Home = () => {
 

  return <div className="home"> 
 <main>
  <Hero/>
  <Services/>
  <Tools/>
  <Guide/>
  <Advert/>
 </main>
  </div>;
};

export default Home;
