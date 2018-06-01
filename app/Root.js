/**
 * Created by ellen on 2/6/18.
 */

import React, {Component} from 'react';
import {} from 'react-native';
import {createStackNavigator} from 'react-navigation';

import Login from './pages/Login';
import Register from './pages/Register';


const RootStack = createStackNavigator(
    {
        Login: Login,
        Register: Register,
    },
    {
        initialRouteName: 'Login',
    }
);

export default class Root extends Component {

    render() {
        return <RootStack />;
    }
}