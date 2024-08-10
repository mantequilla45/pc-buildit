import React from 'react';
import { useLocation } from 'react-router-dom'; // Import useLocation
import './left-banner.css';
import { Link } from 'react-router-dom';

function LeftBanner({ isBannerVisible, toggleBanner }) {
  const location = useLocation();
  const isBuildPage = location.pathname === '/build';

  return (
    <>
      <div className={`banner ${isBannerVisible ? 'visible' : ''} ${isBuildPage ? 'build-page' : ''}`}>
        <div className={`banner-header ${isBuildPage ? 'build-page' : ''}`}>
          <div className="logo-container">
            <img
              className="hamburger-menu"
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/942726a5266df90be00d156c2a80867728256785feb0eccff2410776a7283930?apiKey=0cd5b3eb85e74a83a268d41d07a9c27f&&apiKey=0cd5b3eb85e74a83a268d41d07a9c27f"
              alt="Menu Icon"
              onClick={toggleBanner}
            />
            <a href="/">
              <img
                className="logo"
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c9f7d39735176760c056fc91eaf632fe1efec4d3171d173231809f32f114f8a?apiKey=0cd5b3eb85e74a83a268d41d07a9c27f&&apiKey=0cd5b3eb85e74a83a268d41d07a9c27f"
                alt="Buildit Logo"
              />
            </a>
          </div>
          <NavigationBanner />
        </div>
      </div>
      <div className={`overlay ${isBannerVisible ? 'visible' : ''}`} onClick={toggleBanner}></div>
    </>
  );
}

function NavigationBanner() {
  return (
    <div className="navigation-banner">
      <Link className="navigation-items" to="/">
        <img
          className="navigation-icon"
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/83e513bcb1dfe358fe48ba34d2c95cba162fab12b79919a4a2971ce94a8aae86?apiKey=0cd5b3eb85e74a83a268d41d07a9c27f&&apiKey=0cd5b3eb85e74a83a268d41d07a9c27f"
          alt="Home icon"
        />
        <h2 className="navigation-text">Home</h2>
      </Link>
      <Link className="navigation-items" to="/build">
        <img
          className="navigation-icon"
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/73f6c1b2480695813badd0ac2ec0af1df593869eefa895e9459f64cd4f939a9e?apiKey=0cd5b3eb85e74a83a268d41d07a9c27f&&apiKey=0cd5b3eb85e74a83a268d41d07a9c27f"
          alt="Build icon"
        />
        <h2 className="navigation-text">Build</h2>
      </Link>
      <Link className="navigation-items" to="/components">
        <img
          className="navigation-icon"
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/dc1beb850ee3bd27de312829fb29f61852cd91faa601a168480c54e0cddad13d?apiKey=0cd5b3eb85e74a83a268d41d07a9c27f&&apiKey=0cd5b3eb85e74a83a268d41d07a9c27f"
          alt="Components icon"
        />
        <h2 className="navigation-text">Components</h2>
      </Link>
      <Link className="navigation-items" to="/computers">
        <img
          className="navigation-icon"
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9440ab9b7920c9567341542057de5f999364a827dc4754b9cf406b7d555a981e?apiKey=0cd5b3eb85e74a83a268d41d07a9c27f&&apiKey=0cd5b3eb85e74a83a268d41d07a9c27f"
          alt="Computers icon"
        />
        <h2 className="navigation-text">Computers</h2>
      </Link>
      <Link className="navigation-items" to="/guides">
        <img
          className="navigation-icon"
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/32471bfed74fdd70d7c0982a2d65138ad1c2a263aa8c1b0648e7af71a9df505d?apiKey=0cd5b3eb85e74a83a268d41d07a9c27f&&apiKey=0cd5b3eb85e74a83a268d41d07a9c27f"
          alt="Guides icon"
        />
        <h2 className="navigation-text">Guides</h2>
      </Link>
    </div>
  );
}

export default LeftBanner;
