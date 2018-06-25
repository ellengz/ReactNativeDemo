/**
 * Created by ellen on 22/6/18.
 */
import React, {Component} from 'react';
import {Button, Image, View} from 'react-native';

export default class Profile extends Component {
    constructor(props) {
        super(props);
        this._handleLogout = this._handleLogout.bind(this);
    }

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../images/icon_app.jpg')} />
                <Button title={"Logout"} onPress={this._handleLogout}/>
            </View>
        );
    }

    _handleLogout() {
        // TODO handling for facebook logout is needed
        // AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    }
}