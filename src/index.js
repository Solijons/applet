import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from './store/reducer';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import View from './components/view';

const store = createStore(reducer);

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route path={process.env.PUBLIC_URL} component={View} />
            <Redirect from="/applet" to="/applet/dashboard" />
            <Provider store={store}><App /></Provider>
        </Switch>
    </HashRouter>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
