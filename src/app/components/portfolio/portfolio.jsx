import React from 'react';
import { useSelector } from 'react-redux';
import { getLang } from '../../redux/langReducer';
import Header from '../header/header';
import { menuData, portfolioData } from '../../data/data';
import link from '../common/svg/link';
import classes from './portfolio.module.css';

const Portfolio = () => {
    const lang = useSelector(getLang());
    const linkTitle = lang === 'en' ? 'visit site' : 'перейти на сайт';
    const todoTitle = lang === 'en' ? 'What is done' : 'Что сделано';
    const techsTitle = lang === 'en' ? 'Technologies' : 'Технологии';
    const portfolio = portfolioData[lang];
    return (
        <>
            <Header />
            <main className='mainContainer'>
                <h1 className='mainTitle'>{menuData[lang].portfolio}</h1>
                {portfolio.map(({ title, descr, url, image, todo, techs }) => (
                    <div className={classes.cardWrap}>
                        <div className={classes.textWrap}>
                            <div>
                                <h1 className={classes.title}>{title}</h1>
                                <div className={classes.descr}>{descr}</div>
                            </div>
                            <div>
                                <div className={classes.subTitle}>
                                    {todoTitle}
                                </div>
                                <div className={classes.subContent}>{todo}</div>
                            </div>
                            <div>
                                <div className={classes.subTitle}>
                                    {techsTitle}
                                </div>
                                <div className={classes.subContent}>
                                    {techs}
                                </div>
                            </div>
                            <a
                                className={classes.link}
                                href={url}
                                target='_blank'
                                rel='noreferrer'
                                title={title}
                            >
                                {linkTitle} {link}
                            </a>
                        </div>
                        <img
                            className={classes.image}
                            src={image}
                            alt={title}
                            title={title}
                        />
                    </div>
                ))}
            </main>
        </>
    );
};

export default Portfolio;
