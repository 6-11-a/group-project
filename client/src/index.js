import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Home from './Screens/Home';
import Cart from './Screens/Cart';
import LoginSignUp from './Screens/LoginSignUp';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={Home} />
            <Route path="/cart" component={Cart} />
            <Route path="/login" component={LoginSignUp} />
        </div>
    </Router>, document.getElementById('root'));
registerServiceWorker();
