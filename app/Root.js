/**
 * Created by ellen on 2/6/18.
 */

import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator, createStackNavigator, createSwitchNavigator} from 'react-navigation';

import Login from './pages/Login';
import Register from './pages/Register';
import Loading from './pages/Loading';
import Home from './pages/Home.js';


class SettingsScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Settings!</Text>
            </View>
        );
    }
}

const AppStack = createBottomTabNavigator({
    Home: Home,
    Settings: SettingsScreen,
});

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