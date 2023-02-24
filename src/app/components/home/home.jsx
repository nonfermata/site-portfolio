import React from 'react';
import { useSelector } from 'react-redux';
import { getLang } from '../../redux/langReducer';
import { homeData } from '../../data/data';
import { Link } from 'react-router-dom';
import classes from './home.module.css';
import HorNav from '../common/horNav/horNav';
import LangBar from '../common/langBar/langBar';

const Home = () => {
    const lang = useSelector(getLang());
    const { hello, title, descr, btnStack, btnPortfolio } = homeData[lang];
    return (
        <>
            <div className={classes.horNavWrap}>
                <HorNav />
            </div>
            <main className={classes.mainContainerHome}>
                <div className={classes.langWrap}>
                    <LangBar />
                </div>
                <div>
                    <h2 className={classes.mainTitle}>{hello}</h2>
                    <h3 className={classes.title}>{title}</h3>
                    <p className={classes.descr}>{descr}</p>
                </div>
                <div className={classes.buttonsWrap}>
                    <Link to='../portfolio' className={classes.button}>
                        {btnPortfolio}
                    </Link>
                    <Link to='../stack' className={classes.button}>
                        {btnStack}
                    </Link>
                </div>
            </main>
        </>
    );
};

export default Home;
