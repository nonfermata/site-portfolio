import React from 'react';
import LangBar from '../common/langBar/langBar';
import Profile from '../common/profile/profile';
import HorNav from '../common/horNav/horNav';
import classes from './header.module.css';

const Header = () => {

    return (
        <div className={classes.headerWrap}>
            <LangBar />
            <Profile />
            <HorNav />
        </div>
    );
};

export default Header;
