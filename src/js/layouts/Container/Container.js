/**
 * Created by Hinata on 3/3/2017.
 */
import React from 'react';

export default class Container extends React.Component {
    render() {
        return (
            <div className="container">
                {this.props.children}
            </div>
        );
    }
}