import React, { Component } from 'react';
import '../assets/main.scss';
import SearchAppBar from '../components/SearchAppBar';
import SimpleTable from '../components/SimpleTable';
import { BrowserRouter, Route } from 'react-router-dom';

export default class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <div className="main">
          <SearchAppBar />
          <Route exact path="/" component={SimpleTable} />
        </div>
      </BrowserRouter>
    );
  }
}
