import React from 'react';
import { useSelector } from 'react-redux';
import { getLang } from '../../redux/langReducer';
import Header from '../header/header';
import { contactsData, menuData } from '../../data/data';
import socialLinks from '../../data/socialLinks';
import githubIcon from '../../assets/images/icons/github_icon_invert.png';
import classes from './contacts.module.css';

const Contacts = () => {
    const lang = useSelector(getLang());
    const contacts = contactsData[lang];
    return (
        <>
            <Header />
            <main className='mainContainer'>
                <h1 className='mainTitle'>{menuData[lang].contacts}</h1>
                <p className='subTitle'>{contacts.title}</p>
                <div className={classes.linksWrap}>
                    {socialLinks.map(({ icon, name, value, url }) => (
                        <a
                            key={name}
                            href={url}
                            className={classes.linkWrap}
                            title={value}
                        >
                            <img
                                className={classes.icon}
                                src={value === 'GitHub' ? githubIcon : icon}
                                alt={value}
                            />
                            <p>{contacts.descriptions[name]}</p>
                        </a>
                    ))}
                </div>
            </main>
        </>
    );
};

export default Contacts;
