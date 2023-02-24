import React from 'react';
import Sidebar from './components/sidebar/sidebar';
import Main from './components/main';

const App = () => {
    return (
        <div className='container'>
            <Sidebar />
            <Main />
        </div>
    );
};

export default App;
