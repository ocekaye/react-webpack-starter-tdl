/**
 * Created by Hinata on 3/3/2017.
 */
import React from 'react';
import Header from '../Header';

export default class ContainerHeader extends React.Component {
    render() {
        return (
            <div className="container">
                <Header/>
                {this.props.children}
            </div>
        );
    }
}