import './build.css';
import React, { useState, useRef } from 'react';

function Build() {

    const [activeComponent, setActiveComponent] = useState('');
    const [barPosition, setBarPosition] = useState(0);
    const componentRefs = useRef({});

    const components = [
        { name: 'Your PC', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f8d5e81b00cc2c54ac789ed1efa798341577daf6a4323a0b2e47345611e07e7a?placeholderIfAbsent=true&apiKey=0cd5b3eb85e74a83a268d41d07a9c27f' },
        { name: 'CPU', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1f50ee12e9e24e3fa3b3a57866516fbec628401a738b773519142cc78045ab1a?placeholderIfAbsent=true&apiKey=0cd5b3eb85e74a83a268d41d07a9c27f' },
        { name: 'Motherboard', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5f4baf9e126a8a8ca27b81613ed84999e7208a89c008a72587800dec7632d7d2?placeholderIfAbsent=true&apiKey=0cd5b3eb85e74a83a268d41d07a9c27f' },
        { name: 'GPU', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/7460b014e25959e41481ee85234f31900c131b597d8ab63ec81e5984a3d3ca68?placeholderIfAbsent=true&apiKey=0cd5b3eb85e74a83a268d41d07a9c27f' },
        { name: 'RAM', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/10e58dd2c3d98465c09a3c03983d554cdddef81f8aaf913533e09b23e602c224?placeholderIfAbsent=true&apiKey=0cd5b3eb85e74a83a268d41d07a9c27f' },
        { name: 'Drives', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8df222d79be6ffe86c6ece58b88235d53401faf6604a2db820ca2d3778fb57a1?placeholderIfAbsent=true&apiKey=0cd5b3eb85e74a83a268d41d07a9c27f' },
        { name: 'PSU', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/10d48164c05f8e67b3385b449f78b3f9270d2b3857bef09fd96b731fb0395dd0?placeholderIfAbsent=true&apiKey=0cd5b3eb85e74a83a268d41d07a9c27f' },
        { name: 'Case', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/02fd71653bb1128324706223337d31e85274370ebc88522fffa7076846454ccf?placeholderIfAbsent=true&apiKey=0cd5b3eb85e74a83a268d41d07a9c27f' },
        { name: 'Cooling System', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2e3ca42bc6dc722771a077c8d2850602985e167ef3605372492c36f409307a64?placeholderIfAbsent=true&apiKey=0cd5b3eb85e74a83a268d41d07a9c27f' },
        { name: 'Monitor', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/22060ff47cfa406892e35119fe784e14d5dbe41d45174f61601a11229efb6a9b?placeholderIfAbsent=true&apiKey=0cd5b3eb85e74a83a268d41d07a9c27f' },
        { name: 'Mouse', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/39c93e7667e4c15fb11f2691bcff4ca7858c12a7fed45339baf2583454eb52cd?placeholderIfAbsent=true&apiKey=0cd5b3eb85e74a83a268d41d07a9c27f' },
        { name: 'Keyboard', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/b2856b62530f51ca845f1586d52f0152dcea1db4a023838987673219f33c24e3?placeholderIfAbsent=true&apiKey=0cd5b3eb85e74a83a268d41d07a9c27f' },
        { name: 'Speakers', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ed872fb5c29df9995b3e7e3bac85b1fe99b1ef63ff0562a36951d693d17fadc2?placeholderIfAbsent=true&apiKey=0cd5b3eb85e74a83a268d41d07a9c27f' },
    ];

    const handleClick = (componentName) => {
        setActiveComponent(componentName);
        const component = componentRefs.current[componentName];
        if (component) {
            setBarPosition(component.offsetTop - component.parentNode.offsetTop);
        }
    };

    const renderComponent = ({ name, icon }) => (
        <div
            className="component"
            key={name}
            ref={(el) => (componentRefs.current[name] = el)}
            onClick={() => handleClick(name)}
        >
            <div className="component-container">
                <img className="component-icon" src={icon} alt={`${name} icon`} />
                <h2 className="component-name">{name}</h2>
            </div>
        </div>
    );

    return (
        <div className="build">
            <div className="build-content">
                <div className="bar-container">
                    <div className="build-bar" style={{ top: barPosition }}></div>
                </div>
                <div className="build-components">
                    <div className="menu-container">
                        {components.map(renderComponent)}
                    </div>
                </div>
                
                <div className="build-screen">
                    <div className = "build-screen-header">
                        {activeComponent && (
                            <div>
                                <div className = "build-title">{activeComponent}</div>
                            </div>
                        )}
                    </div>
                </div>
                
                <div className="build-components">
                    
                </div>
            </div>
        </div>
    );
}

export default Build;
