import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './home/home';
import Portfolio from './portfolio/portfolio';
import Stack from './stack/stack';
import Contacts from './contacts/contacts';

const Main = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='portfolio' element={<Portfolio />} />
            <Route path='stack' element={<Stack />} />
            <Route path='contacts' element={<Contacts />} />
            <Route path='*' element={<Navigate to='' />} />
        </Routes>
    );
};

export default Main;
