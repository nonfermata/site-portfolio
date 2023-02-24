import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LangBar from '../langBar/langBar';
import SocialLinks from '../socialLinks/socialLinks';
import { getLang } from '../../redux/langReducer';
import { profileData, menuData } from '../../data/data';
import photo from '../../assets/images/dima.png';
import classes from './sidebar.module.css';

const Sidebar = () => {
    const lang = useSelector(getLang());
    const menu = menuData[lang];
    const { name, role } = profileData[lang];
    return (
        <div className={classes.sidebarWrap}>
            <LangBar />
            <img className={classes.photo} src={photo} alt='Dmitry' />
            <div className={classes.personWrap}>
                <p className={classes.name}>{name}</p>
                <p className={classes.role}>{role}</p>
            </div>
            <nav className={classes.navbar}>
                {Object.keys(menu).map((key) => (
                    <Link className={classes.navItem} to={key}>
                        {menu[key]}
                    </Link>
                ))}
            </nav>
            <SocialLinks />
        </div>
    );
};

export default Sidebar;
