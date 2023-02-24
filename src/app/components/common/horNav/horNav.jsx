import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SocialLinks from '../socialLinks/socialLinks';
import { menuData } from '../../../data/data';
import { getLang } from '../../../redux/langReducer';
import classes from './horNav.module.css'

const HorNav = () => {
    const lang = useSelector(getLang());
    const menu = menuData[lang];
    return (
        <div className={classes.horNavWrap}>
            <nav className={classes.horNavbar}>
                {Object.keys(menu).map((key) => (
                    <NavLink
                        className={(link) =>
                            link.isActive
                                ? classes.navItemActive
                                : classes.navItem
                        }
                        to={`../${key}`}
                    >
                        {menu[key]}
                    </NavLink>
                ))}
            </nav>
            <div>
                <SocialLinks />
            </div>
        </div>
    );
};

export default HorNav;