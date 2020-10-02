import React from "react";


const Button = ({name, whenClick, colour,classNamePassed}) => (
    <button 
        onClick={ whenClick }
        style={{ backgroundColor : `var(--${colour})`, }}
        className={`${classNamePassed} myButton`}
        >{name}
    </button>
);
export default Button; 