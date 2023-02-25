import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { menuData } from '../../../../data/data';
import { getLang } from '../../../../redux/langReducer';
import classes from './mobileMenu.module.css';

const MobileMenu = () => {
    const { mobileMenu, menuItem, menuItemActive} = classes;
    const lang = useSelector(getLang());
    const menu = menuData[lang];
    return (
        <nav className={mobileMenu}>
            {Object.keys(menu).map((key) => (
                <NavLink
                    className={(link) =>
                        link.isActive
                            ? menuItemActive
                            : menuItem
                    }
                    to={`../${key}`}
                >
                    {menu[key]}
                </NavLink>
            ))}
        </nav>
    );
};

export default MobileMenu;