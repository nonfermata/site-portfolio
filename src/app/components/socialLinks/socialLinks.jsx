import React from 'react';
import classes from './socialLinks.module.css';
import socialLinks from '../../data/socialLinks';

const SocialLinks = () => {
    return (
        <div className={classes.iconsWrap}>
            {socialLinks.map(({ path, icon, name }) => (
                <a href={path} target='_blank' rel='noreferrer'>
                    <img
                        className={
                            name === 'GitHub'
                                ? classes.iconGithub
                                : classes.icon
                        }
                        src={icon}
                        alt={name}
                        title={name}
                    />
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;
