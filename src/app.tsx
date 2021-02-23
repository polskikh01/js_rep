import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import Dashboard from './containers/dashboadr';

import { store } from './__data__/store';

import './app.css';

const App = () => (
    <Provider store={store}>
        <BrowserRouter basename="/js_rep">
            <Dashboard />
        </BrowserRouter>
    </Provider>
);

export default App;
