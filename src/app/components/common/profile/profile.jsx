import React from 'react';
import { profileData } from '../../../data/data';
import { useSelector } from 'react-redux';
import { getLang } from '../../../redux/langReducer';
import photo from '../../../assets/images/dima.png';
import classes from './profile.module.css';

const Profile = () => {
    const lang = useSelector(getLang());
    const { name, role } = profileData[lang];
    return (
        <div className={classes.profile}>
            <img className={classes.photo} src={photo} alt='Dmitry' />
            <div className={classes.personWrap}>
                <p className={classes.name}>{name}</p>
                <p className={classes.role}>{role}</p>
            </div>
        </div>
    );
};

export default Profile;
