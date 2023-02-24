import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { applyLang, getLang } from '../../../redux/langReducer';
import classes from './langBar.module.css';

const LangBar = () => {
    const { langBar, langItem, langItemActive } = classes;
    const dispatch = useDispatch();
    const lang = useSelector(getLang());
    const handleChangeLang = (payload) => {
        if (lang !== payload) {
            dispatch(applyLang(payload));
        }
    };
    return (
        <div className={langBar}>
            <span
                className={lang === 'en' ? langItemActive : langItem}
                onClick={() => handleChangeLang('en')}
            >
                Eng
            </span>
            |
            <span
                className={lang === 'ru' ? langItemActive : langItem}
                onClick={() => handleChangeLang('ru')}
            >
                Рус
            </span>
        </div>
    );
};

export default LangBar;
