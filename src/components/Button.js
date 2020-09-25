import React from "react";


const Button = ({name, whenClick, colour,classNamePassed}) => (
    <button 
        onClick={ whenClick }
        className={classNamePassed}
        style={{ backgroundColor : `var(--${colour})`, }}
        >{name}
    </button>
);
export default Button; 