/**
 * Created by ellen on 30/5/18.
 */
import React, {Component} from 'react';
import {
    Image,
    TextInput,
    View,
    StyleSheet,
    Button,
} from 'react-native';

import md5 from 'react-native-md5';

let Dimensions = require('Dimensions');
let screenWidth = Dimensions.get('window').width;

export default class Login extends Component {

    static navigationOptions = {
        header: null,
    };

    constructor(props, context) {
        super(props, context);
        this._handleLogin = this._handleLogin.bind(this);
        this._goToRegister = this._goToRegister.bind(this);
        this.state = {
            username: '',
            password: '',
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.topContainer}>
                    <Image source={require('../../images/icon_logo.png')} style={styles.logo}/>
                </View>
                <View style={styles.lowerContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder='username'
                        autoCorrect={false}
                        autoCapitalize='none' //enum('none', 'sentences', 'words', 'characters')
                        value={this.props.navigation.getParam('username', '')}
                        onChangeText={(username) => this.setState({username})}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder='password'
                        secureTextEntry={true}
                        onChangeText={(password) => this.setState({password})}
                    />
                    <Button title="Login" onPress={this._handleLogin}/>
                    <Button title="Register" onPress={this._goToRegister}/>
                </View>
            </View>
        )
    }

    _handleLogin() {
        console.log('password: ' + this.state.password + md5.hex_md5(this.state.password));
        return fetch('http://18.219.67.95/api/app/login.php', {
            method: 'POST',
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password,
            }),
        })
            .then((response) => response.json())
            .then((responseJson) => {
                // if (responseJson.code === '-1') {
                //     // TODO find somewhere to show msg
                //     console.log('error: ' + responseJson.msg);
                // } else {
                //     this.props.navigation.navigate('Test');
                // }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    _goToRegister() {
        this.props.navigation.navigate('Register');
    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    topContainer: {
        flex: 2,
        marginTop: 22,
        marginBottom: 22,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    lowerContainer: {
        flex: 3,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    logo: {
        height: screenWidth * 0.25,
        width: screenWidth * 0.25,
        borderRadius: 15,
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
});
