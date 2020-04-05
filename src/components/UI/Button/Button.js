import React from 'react';
import './Button.css';


const button = (props) => {
    const fullClassname = "Button "+props.btnType;
    return (
        <button
        className={fullClassname}
        onClick={props.clicked}
        disabled={props.disabled}>{props.children}</button>
    );
}


export default button;