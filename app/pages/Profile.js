/**
 * Created by ellen on 22/6/18.
 */
import React, {Component} from 'react';
import {Image, View} from 'react-native';

export default class Profile extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={require('../../images/icon_app.jpg')} />
            </View>
        );
    }
}