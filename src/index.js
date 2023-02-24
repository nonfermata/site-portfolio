import React from 'react';
import reactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './app/App';
import store from './app/redux/store';
import './index.css';

const root = reactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);
