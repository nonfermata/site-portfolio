import React from 'react';
import { useSelector } from 'react-redux';
import { getLang } from '../../redux/langReducer';
import { menuData } from '../../data/data';

const Contacts = () => {
    const lang = useSelector(getLang());
    return (
        <main className='mainContainer'>
            <h1 className='mainTitle'>{menuData[lang].contacts}</h1>
        </main>
    );
};

export default Contacts;
