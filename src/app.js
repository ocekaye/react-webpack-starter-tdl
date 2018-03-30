import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import todoApp from './reducers';

import './assets/scss/main.scss';
import './assets/css/main.css';

import Header from './components/Header';
import Footer from './components/Footer';
import MainPage from './layout/MainPage';
import Form from './layout/Form';
import About from './layout/About';
import NotFound from './layout/NotFound';
import Redux from  './layout/Redux';

let store = createStore(todoApp);

const app = document.getElementById('app');

ReactDOM.render(
    <Provider store={store}>
      <Router>
        <div className="">
          <Header/>
          <div style={{paddingTop: 65}}>
            <Switch>
              <Route exact path="/" component={MainPage}/>
              <Route path="/about" component={About}/>
              <Route path="/input" component={Form}/>
              <Route path="/redux" component={Redux}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    </Provider>
    , app);

