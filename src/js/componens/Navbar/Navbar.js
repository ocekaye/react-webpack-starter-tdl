/**
 * Created by Hinata on 3/3/2017.
 */
import React from 'react';
import { Link } from 'react-router';
import ListNavbar from './ListNavbar';

export default class Navbar extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            <img alt="TDL" src="./assets/images/tdl.jpg"/>
                        </a>
                    </div>
                    <div className="navbar-header">
                        <a className="navbar-brand" href="#">
                            TDL
                        </a>
                    </div>
                    <div id="navbar" className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <ListNavbar to="home">Home </ListNavbar>
                            <ListNavbar to="about">About </ListNavbar>
                            <ListNavbar to="todo">Note </ListNavbar>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}