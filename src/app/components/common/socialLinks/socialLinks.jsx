import React from 'react';
import classes from './socialLinks.module.css';
import socialLinks from '../../../data/socialLinks';

const SocialLinks = () => {
    return (
        <div className={classes.iconsWrap}>
            {socialLinks.map(({ url, icon, value }) => (
                <a href={url} target='_blank' rel='noreferrer'>
                    <img
                        className={
                            value === 'GitHub'
                                ? classes.iconGithub
                                : classes.icon
                        }
                        src={icon}
                        alt={value}
                        title={value}
                    />
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;
