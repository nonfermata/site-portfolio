import React from 'react';
import { useSelector } from 'react-redux';
import Header from '../header/header';
import { getLang } from '../../redux/langReducer';
import { stackData, menuData } from '../../data/data';
import classes from './stack.module.css';

const Stack = () => {
    const lang = useSelector(getLang());
    const {
        mainRoleTitle,
        mainRoleBase,
        mainRoleDescr,
        extraRolesTitle,
        extraRolesList,
        skillsTitle,
        skillsList
    } = stackData[lang];
    return (
        <>
            <Header />
            <main className='mainContainer'>
                <h1 className='mainTitle'>{menuData[lang].stack}</h1>
                <h2 className='subTitle'>{mainRoleTitle}</h2>
                <p className={classes.mainRole}>
                    <span className='fw600'>{mainRoleBase}</span>
                    <br />
                    {mainRoleDescr}
                </p>
                <h2 className='subTitle'>{extraRolesTitle}</h2>
                <ul className={classes.extraRoles}>
                    {extraRolesList.map((item) => (
                        <li key={item} className={classes.listItem}>
                            {item}
                        </li>
                    ))}
                </ul>
                <h2 className='subTitle'>{skillsTitle}</h2>
                <ul className={classes.skills}>
                    {skillsList.map((item) => (
                        <li key={item} className={classes.listItem}>
                            {item}
                        </li>
                    ))}
                </ul>
            </main>
        </>
    );
};

export default Stack;
