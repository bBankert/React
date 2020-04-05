import React from 'react';
import burger from '../../assets/images/burger.png';
import './Logo.css';

const logo = (props) => (
    <div className="Logo" style={{height: props.height}}>
        <img src={burger} alt="Broken Burger"/>
    </div>
);


export default logo;