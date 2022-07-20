import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import {configStore} from './store/index';
const root = ReactDOM.createRoot(document.getElementById('root'));

const store = configStore();


root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
