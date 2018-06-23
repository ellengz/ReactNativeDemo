/**
 * Created by ellen on 2/6/18.
 */

import React, {Component} from 'react';
import {createBottomTabNavigator, createStackNavigator, createSwitchNavigator} from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

import Login from './pages/Login';
import Register from './pages/Register';
import Loading from './pages/Loading';
import Home from './pages/Home.js';
import Profile from './pages/Profile.js';
import Cart from './pages/Cart.js';

const AppStack = createBottomTabNavigator(
    {
        Home: Home,
        Cart: Cart,
        Profile: Profile,
    },
    {
        navigationOptions: ({navigation}) => ({
            tabBarIcon: ({focused, tintColor}) => {
                const {routeName} = navigation.state;
                let iconName = `${focused ? '' : '-outline'}`;
                switch (routeName) {
                    case 'Home':
                        iconName = `ios-home` + iconName;
                        break;
                    case 'Profile':
                        iconName = `ios-person` + iconName;
                        break;
                    case 'Cart':
                        iconName = `ios-cart` + iconName;
                        break;
                }
                // icon component from react-native-vector-icons
                return <Icon name={iconName} size={35} color={tintColor}/>;
            },
        }),

        tabBarOptions: {
            activeTintColor: 'orangered',
            inactiveTintColor: 'grey',
            labelStyle: {
                color: 'grey',
                fontSize: 12,
                fontWeight: 'bold'
            }
        }
    }
);

const AuthStack = createStackNavigator(
    {
        Login: Login,
        Register: Register,
    },
    {
        initialRouteName: 'Login',
    }
);

/**
 * root navigation
 */
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