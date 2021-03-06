import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux'
import {ConnectedRouter} from 'react-router-redux'
import store, {history} from "./store";

import './index.css';
import App from './main/App';

const elementTarget = document.querySelector('#root')

render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    elementTarget
)