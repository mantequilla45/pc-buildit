import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './header.css';
import LeftBanner from '../Left Banner/left-banner';

function Header() {
  const [isBannerVisible, setBannerVisible] = useState(false);

  const toggleBanner = () => {
    setBannerVisible(!isBannerVisible);
  };

  const hideBanner = () => {
    setBannerVisible(false);
  };

  const location = useLocation();
  const isBuildPage = location.pathname === '/build';

  return (
    <header className={`header ${isBuildPage ? 'build-page' : ''}`}>
      <div className="logo-container">
        <img
          className="hamburger-menu"
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/942726a5266df90be00d156c2a80867728256785feb0eccff2410776a7283930?apiKey=0cd5b3eb85e74a83a268d41d07a9c27f&&apiKey=0cd5b3eb85e74a83a268d41d07a9c27f"
          alt="Menu Icon"
          onClick={toggleBanner}
        />
        <a className = "logo-align" href="/">
          <img
            className="logo"
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c9f7d39735176760c056fc91eaf632fe1efec4d3171d173231809f32f114f8a?apiKey=0cd5b3eb85e74a83a268d41d07a9c27f&&apiKey=0cd5b3eb85e74a83a268d41d07a9c27f"
            alt="Buildit Logo"
          />
        </a>
      </div>
      <div className="user-wrapper">
        <a className="user-login" href="/login">Login</a>
        <div className="user-header-divider" />
        <a className="user-register" href="/register">Register</a>
      </div>
      <LeftBanner isBannerVisible={isBannerVisible} toggleBanner={toggleBanner} />
    </header>
  );
}

export default Header;
