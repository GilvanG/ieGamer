/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import PageError from './pages/error';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route component={PageError} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root'),
);

reportWebVitals();
