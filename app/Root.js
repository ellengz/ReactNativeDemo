/**
 * Created by ellen on 2/6/18.
 */

import React, {Component} from 'react';
import {} from 'react-native';
import {createStackNavigator, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login';
import Register from './pages/Register';
import Header from './components/Header';
import Home from './pages/Home'
import Loading from './pages/Loading';

const AppStack = createStackNavigator({ Home: Home });
const AuthStack = createStackNavigator(
    {
        Login: Login,
        Register: Register,
    },
    {
        initialRouteName: 'Login',
    }
);

const RootStack = createSwitchNavigator(
    {
        Loading: Loading,
        Auth: AuthStack,
        App: AppStack,
    },
    {
        initialRouteName: 'Loading',
    }
);

export default class Root extends Component {

    render() {
        return <RootStack />;
    }
}