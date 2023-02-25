import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { menuData } from '../../../../data/data';
import { getLang } from '../../../../redux/langReducer';
import classes from './mobileMenu.module.css';

const MobileMenu = ({ isVisible }) => {
    const { mobileMenu, menuItem, menuItemActive, invisible, hidden } = classes;
    const [navClass, setNavClass] = useState(
        isVisible ? mobileMenu : `${mobileMenu} ${hidden}`
    );
    useEffect(() => {
        if (isVisible) {
            setNavClass(`${mobileMenu} ${invisible}`);
            setTimeout(() => {
                setNavClass(mobileMenu);
            }, 33);
        } else {
            setNavClass(`${mobileMenu} ${invisible}`);
            setTimeout(() => {
                setNavClass(`${mobileMenu} ${hidden}`);
            }, 300);
        }
    }, [isVisible]);
    const lang = useSelector(getLang());
    const menu = menuData[lang];
    return (
        <nav className={navClass}>
            {Object.keys(menu).map((key) => (
                <NavLink
                    key={key}
                    className={(link) =>
                        link.isActive ? menuItemActive : menuItem
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
