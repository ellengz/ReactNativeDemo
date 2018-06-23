/**
 * Created by ellen on 22/6/18.
 */
import React, {Component} from 'react';
import {Text, Image, View} from 'react-native';

export default class Cart extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{fontSize:80}}>Cart!!!</Text>
            </View>
        );
    }
}