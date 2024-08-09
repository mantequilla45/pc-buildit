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
                src="https://uc4a4d310b04d0a65908f02de03f.previews.dropboxusercontent.com/p/thumb/ACXCvLTW0s5Cm0FZDm-jOfncRLMW72LoBjjwK7CQ4tjK1q_TAx7STh4HGvQMbMIemltttjdlw9GmDSIT5NvVG8v-omy1FqXPNbv2rRvyQyJemZC9NR63R7NtiOtELqHkkSaug9F11pX8yJIJW1TGnKEpTZm-LIN0Zdja8OAjTy40Y8GtertTXcog4OQJmigE8Nyig6VVOXnTZp88l4PcHi-7M0IcWHLgsWFAmNRi4aoZ-R5xhx9LgsLhayCRpXFpQg6NG657MOkkgsKlnvk1DJtSLB60CmNSeM0TQbUhuLdVRpBh4IIv44S0mgBqWvYH0MWL8enXPTNjQUuNYLj2TBoSOANLoZl-JEe0HYBJoc0NHxaNMTXN1yTOm5ZrztutiVE/p.png?is_prewarmed=true" 
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
                        src="https://uc4a4d310b04d0a65908f02de03f.previews.dropboxusercontent.com/p/thumb/ACXCvLTW0s5Cm0FZDm-jOfncRLMW72LoBjjwK7CQ4tjK1q_TAx7STh4HGvQMbMIemltttjdlw9GmDSIT5NvVG8v-omy1FqXPNbv2rRvyQyJemZC9NR63R7NtiOtELqHkkSaug9F11pX8yJIJW1TGnKEpTZm-LIN0Zdja8OAjTy40Y8GtertTXcog4OQJmigE8Nyig6VVOXnTZp88l4PcHi-7M0IcWHLgsWFAmNRi4aoZ-R5xhx9LgsLhayCRpXFpQg6NG657MOkkgsKlnvk1DJtSLB60CmNSeM0TQbUhuLdVRpBh4IIv44S0mgBqWvYH0MWL8enXPTNjQUuNYLj2TBoSOANLoZl-JEe0HYBJoc0NHxaNMTXN1yTOm5ZrztutiVE/p.png?is_prewarmed=true" 
                        alt="Buildit Logo" 
                    />
                </div>
                <NavigationBanner />
            </div>
        
        </div>
      </header>
      <div className={`overlay ${isBannerVisible ? 'visible' : ''}`} onClick={hideBanner}></div>
    </>
  );
}


function NavigationBanner () {
  return (
    <div className = "navigation-banner">
      <div className = "navigation-items">
        <img 
          className = "navigation-icon"
          loading = "lazy" 
          src = "https://cdn.builder.io/api/v1/image/assets/TEMP/83e513bcb1dfe358fe48ba34d2c95cba162fab12b79919a4a2971ce94a8aae86?apiKey=0cd5b3eb85e74a83a268d41d07a9c27f&&apiKey=0cd5b3eb85e74a83a268d41d07a9c27f"
          alt = "Home icon"
        />
        <h2 className = "navigation-text">Home</h2>
      </div>
      <div className = "navigation-items">
        <img 
          className = "navigation-icon"
          loading = "lazy" 
          src = "https://cdn.builder.io/api/v1/image/assets/TEMP/73f6c1b2480695813badd0ac2ec0af1df593869eefa895e9459f64cd4f939a9e?apiKey=0cd5b3eb85e74a83a268d41d07a9c27f&&apiKey=0cd5b3eb85e74a83a268d41d07a9c27f"
          alt = "Build icon"
        />
        <h2 className = "navigation-text">Build</h2>
      </div>
      <div className = "navigation-items">
        <img 
          className = "navigation-icon"
          loading = "lazy" 
          src = "https://cdn.builder.io/api/v1/image/assets/TEMP/dc1beb850ee3bd27de312829fb29f61852cd91faa601a168480c54e0cddad13d?apiKey=0cd5b3eb85e74a83a268d41d07a9c27f&&apiKey=0cd5b3eb85e74a83a268d41d07a9c27f"
          alt = "Components icon"
        />
        <h2 className = "navigation-text">Components</h2>
      </div>
      <div className = "navigation-items">
        <img 
          className = "navigation-icon"
          loading = "lazy" 
          src = "https://cdn.builder.io/api/v1/image/assets/TEMP/9440ab9b7920c9567341542057de5f999364a827dc4754b9cf406b7d555a981e?apiKey=0cd5b3eb85e74a83a268d41d07a9c27f&&apiKey=0cd5b3eb85e74a83a268d41d07a9c27f"
          alt = "Computers icon"
        />
        <h2 className = "navigation-text">Computers</h2>
      </div>
      <div className = "navigation-items">
        <img 
          className = "navigation-icon"
          loading = "lazy" 
          src = "https://cdn.builder.io/api/v1/image/assets/TEMP/32471bfed74fdd70d7c0982a2d65138ad1c2a263aa8c1b0648e7af71a9df505d?apiKey=0cd5b3eb85e74a83a268d41d07a9c27f&&apiKey=0cd5b3eb85e74a83a268d41d07a9c27f"
          alt = "Guides icon"
        />
        <h2 className = "navigation-text">Guides</h2>
      </div>
    </div>
  );
}
export default Header;
