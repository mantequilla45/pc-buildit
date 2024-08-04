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
            </div>
        
        </div>
      </header>
      <div className={`overlay ${isBannerVisible ? 'visible' : ''}`} onClick={hideBanner}></div>
    </>
  );
}

export default Header;
