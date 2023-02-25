import React from 'react';
import classes from './burger.module.css';

const Burger = ({ handleClick }) => {
    const { burger, burgerLine } = classes;
    return (
        <div className={burger} onClick={handleClick}>
            <div className={burgerLine}></div>
            <div className={burgerLine}></div>
            <div className={burgerLine}></div>
        </div>
    );
};

export default Burger;
