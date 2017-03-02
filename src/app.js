import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';

import ContainerHeader from './js/layouts/ContainerHeader';
import Home from './js/layouts/Home';
import About from './js/componens/About';
import Todo from './js/layouts/Todo';
import todoApp from './reducers'

let store = createStore(todoApp)

const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
        <Router history={hashHistory}>
            <Route path='/' component={ContainerHeader}>
                <IndexRoute component={Home} />
                <Route path='home' component={Home}/>
                <Route path='about' component={About}/>
                <Route path='todo' component={Todo}/>
            </Route>
        </Router>
    </Provider>
    , app);

