import React from 'react';

//import js
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';

export default class MainPage extends React.PureComponent {
  render() {
    return (
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">React Webpack Bootstrap Starter</h1>
          <p className="lead">Use this project as a way to quickly start new react project with Bootstrap. Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>
        </div>
    );
  }
}