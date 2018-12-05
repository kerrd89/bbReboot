import React, { Component } from 'react';
import '../assets/main.scss';
import SearchAppBar from '../components/SearchAppBar';
import SimpleTable from '../components/SimpleTable';

export default class App extends Component {
  render () {
    return (
      <div className="main">
        <SearchAppBar />
        <SimpleTable />
      </div>
    );
  }
}
