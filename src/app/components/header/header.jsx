import React from 'react';
import LangBar from '../common/langBar/langBar';
import Profile from '../common/profile/profile';
import AllLinksBlock from './allLinksBlock/allLinksBlock';
import classes from './header.module.css';

const Header = () => {
    return (
        <div className={classes.header}>
            <LangBar />
            <Profile />
            <AllLinksBlock />
        </div>
    );
};

export default Header;
