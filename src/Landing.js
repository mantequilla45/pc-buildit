import React from 'react';
import './Landing.css';
import { Helmet } from 'react-helmet';
import Header from './header';

function Landing() {
  return (
    <div>
      <Header/> 
      <Helmet>
        <title>PC Buildit</title>
      </Helmet>
      <div  className="landing-page">
        <div className = "hero-section"></div>
        <div className = "second-section"></div>
      </div>
    </div>
  );
}

export default Landing;
