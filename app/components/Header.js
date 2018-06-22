/**
 * Created by ellen on 22/5/18.
 */
'use strict';

import React, { Component } from 'react';
import {
    Image,
    TextInput,
    View,
    StyleSheet,
    Platform,
    Button,
    AsyncStorage
} from 'react-native';

export default class Header extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../../images/icon_logo.png')} style={styles.logo} />
                <View style={styles.searchBox}>
                    <Image source={require('../../images/icon_search.png')} style={styles.searchIcon} />
                    <TextInput
                        keyboardType='web-search'
                        placeholder='Search a product/store'
                        style={styles.inputText}/>
                </View>
                <Button title="test" onPress={this._handleLogout.bind(this)}/>
            </View>
        )
    }

    _handleLogout() {
        AsyncStorage.clear();
        this.props.navigation.navigate('Auth');
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', // default value is 'column'
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: Platform.OS === 'ios' ? 20 : 0,   // for iOS status bar
        height: Platform.OS === 'ios' ? 68 : 48,   // for iOS status bar
        backgroundColor: '#d3d3d3',
        alignItems: 'center'
    },
    logo: {
        height: 30,
        width: 30,
        resizeMode: 'stretch',
        borderRadius: 5
    },
    searchIcon: {
        marginLeft: 6,
        marginRight: 6,
        width: 16.7,
        height: 16.7,
        resizeMode: 'stretch'
    },
    searchBox: {
        height: 30,
        flexDirection: 'row',
        flex: 1,
        borderRadius: 5,
        backgroundColor: 'white',
        alignItems: 'center',
        marginLeft: 8,
        marginRight: 12
    },
    inputText: {
        flex: 1,
        backgroundColor: 'transparent',
        fontSize: 14
    }
});