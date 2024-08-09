import React, { useState } from 'react';
import './header.css';

function Header() {
  const [isBannerVisible, setBannerVisible] = useState(false);

  const toggleBanner = () => {
    setBannerVisible(!isBannerVisible);
  };

  const hideBanner = () => {
    setBannerVisible(false);
  };

  return (
    <>
      <header className='header'>
        <div className="logo-container">
            <img 
                className="hamburger-menu" 
                loading="lazy" 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/942726a5266df90be00d156c2a80867728256785feb0eccff2410776a7283930?apiKey=0cd5b3eb85e74a83a268d41d07a9c27f&&apiKey=0cd5b3eb85e74a83a268d41d07a9c27f" 
                alt="Menu Icon"
                onClick={toggleBanner} 
            />
            <img 
                className="logo" 
                loading="lazy" 
                href="/"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c9f7d39735176760c056fc91eaf632fe1efec4d3171d173231809f32f114f8a?apiKey=0cd5b3eb85e74a83a268d41d07a9c27f&&apiKey=0cd5b3eb85e74a83a268d41d07a9c27f" 
                alt="Buildit Logo" 
            />
        </div>
        <div className="user-wrapper">
            <a className="user-login" href="/login">Login</a>
            <div className="user-header-divider" />
            <a className="user-register" href="/register">Register</a>
        </div>
        <div className={`banner ${isBannerVisible ? 'visible' : ''}`}>
            <div className = "banner-header">
                <div className="logo-container">
                    <img 
                        className="hamburger-menu" 
                        loading="lazy" 
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/942726a5266df90be00d156c2a80867728256785feb0eccff2410776a7283930?apiKey=0cd5b3eb85e74a83a268d41d07a9c27f&&apiKey=0cd5b3eb85e74a83a268d41d07a9c27f" 
                        alt="Menu Icon"
                        onClick={toggleBanner} 
                    />
                    <img 
                        className="logo" 
                        loading="lazy" 
                        href="/"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c9f7d39735176760c056fc91eaf632fe1efec4d3171d173231809f32f114f8a?apiKey=0cd5b3eb85e74a83a268d41d07a9c27f&&apiKey=0cd5b3eb85e74a83a268d41d07a9c27f" 
                        alt="Buildit Logo" 
                    />
                </div>
            </div>
        
        </div>
      </header>
      <div className={`overlay ${isBannerVisible ? 'visible' : ''}`} onClick={hideBanner}></div>
    </>
  );
}

export default Header;
