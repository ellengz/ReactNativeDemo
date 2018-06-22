/**
 * Created by ellen on 30/5/18.
 */

import React, {Component} from 'react';
import {
    Button,
    TextInput,
    View,
    Text,
    StyleSheet,
} from 'react-native';

let Dimensions = require('Dimensions');
let screenWidth = Dimensions.get('window').width;

export default class Register extends Component {

    static navigationOptions = {
        title: 'Register',
        headerStyle: {
            backgroundColor: 'orangered',
        },
        headerTintColor: '#fff',
    };

    constructor(props) {
        super(props);
        this._handleRegister = this._handleRegister.bind(this);
        this.state = {
            username: '',
            password: '',
            repeatedPassword: '',
            checkPassword: true
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder='username'
                    autoCorrect={false}
                    autoCapitalize='none'
                    onChangeText={(username) => this.setState({username})}
                />
                <TextInput
                    style={styles.input}
                    placeholder='password'
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({password})}
                />
                <TextInput
                    style={styles.input}
                    placeholder='confirm password'
                    secureTextEntry={true}
                    onChangeText={(repeatedPassword) => {
                        this.setState({repeatedPassword});
                        this.setState({checkPassword: this.state.password === repeatedPassword})
                    }}
                />
                <Text style={styles.passwordHint}>
                    {this.state.checkPassword ? '' : 'Passwords don\'t match'}
                </Text>
                <Button
                    onPress={this._handleRegister}
                    title="Submit"
                />
            </View>
        );
    }

    _handleRegister() {

        if (this.state.checkPassword) {
            return fetch('http://18.219.67.95/api/app/insert_user.php', {
                method: 'POST',
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password,
                }),
            })
                .then((response) => response.json())
                .then((responseJson) => {
                    if (responseJson.code === '-1') {
                        // TODO find somewhere to show msg
                        console.log('error: ' + responseJson.msg);
                    } else {
                        // TODO make an alert
                        this.props.navigation.navigate('Login', {username: this.state.username});
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 40,
        fontSize: 18,
        width: screenWidth * 0.8,
        margin: 5,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: 'lightblue',
    },
    passwordHint: {
        color: 'orangered'
    }
});