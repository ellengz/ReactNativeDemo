/**
 * Created by ellen on 22/6/18.
 */
import React, { Component } from 'react';
import Header from '../components/Header';

export default class Home extends Component {

    render() {
        return (
            <Header navigation = {this.props.navigation}/> // pass navigation to sub components
        )
    }
}