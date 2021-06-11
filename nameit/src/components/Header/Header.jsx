import React from 'react';
import './Header.css'

const Header = ({abhiHeader,headerExpanded}) =>
{
    return (
        <div className="head-container">
            <img src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png"
                className={`head-image 
                    ${headerExpanded
                    ? 'head-image-expanded'
                    : 'head-image-contracted'
                }`}
                alt="Header Image"></img>
            <h1 className={`head-text 
                    ${headerExpanded
                    ? 'head-text-expanded'
                    : 'head-text-contracted'
                }`}
                >{abhiHeader}</h1>
        </div>
    );
}

export default Header;