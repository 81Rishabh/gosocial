import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from 'react-redux';
import App from './App';
import './index.css';
import {configStore} from './store/index';
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configStore();



root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
