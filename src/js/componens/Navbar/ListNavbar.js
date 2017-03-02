/**
 * Created by Hinata on 3/3/2017.
 */
import React from 'react';
import {Link} from "react-router";

class ListNavbar extends React.Component {

    render() {
        let isActive = this.context.router.isActive(this.props.to, true),
            className = isActive ? "active" : "";
        return (
            <li className={className}>
                <Link {...this.props}>
                    {this.props.children}
                </Link>
            </li>
        );
    }
}

ListNavbar.contextTypes = {
    router: React.PropTypes.object
};

export default ListNavbar;