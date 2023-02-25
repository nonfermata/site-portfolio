import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LangBar from '../common/langBar/langBar';
import SocialLinks from '../common/socialLinks/socialLinks';
import Profile from '../common/profile/profile';
import { getLang } from '../../redux/langReducer';
import { menuData } from '../../data/data';
import classes from './sidebar.module.css';

const Sidebar = () => {
    const lang = useSelector(getLang());
    const menu = menuData[lang];
    return (
        <div className={classes.sidebarWrap}>
            <LangBar />
            <Profile/>
            <nav className={classes.menu}>
                {Object.keys(menu).map((key) => (
                    <NavLink
                        key={key}
                        className={(link) =>
                            link.isActive
                                ? classes.menuItemActive
                                : classes.menuItem
                        }
                        to={key}
                    >
                        {menu[key]}
                    </NavLink>
                ))}
            </nav>
            <SocialLinks />
        </div>
    );
};

export default Sidebar;
