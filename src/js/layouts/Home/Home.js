/**
 * Created by Hinata on 3/3/2017.
 */
import React from 'react';
import Container from '../Container';
import HelloTDL from '../../componens/HelloTDL';

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Container>
                    <HelloTDL/>
                </Container>
            </div>
        );
    }
}