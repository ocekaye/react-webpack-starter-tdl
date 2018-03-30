import React from 'react';
import {Link} from 'react-router-dom';

export default class Header extends React.PureComponent {
  render() {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow fixed-top">
          <Link to={'/'} className="my-0 mr-md-auto font-weight-normal"><h5>TDL React Starter</h5></Link>
          <nav className="my-2 my-md-0 mr-md-3 ">
            <Link to={'/input'} className="p-2 text-dark">Input</Link>
            <Link to={'/about'} className="p-2 text-dark">About</Link>
            <Link to={'/redux'} className="p-2 text-dark">Redux</Link>
          </nav>
        </div>
    );
  }
}