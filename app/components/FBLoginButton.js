/**
 * Created by ellen on 25/6/18.
 */
import React, {Component} from 'react';
import {AsyncStorage, View} from 'react-native';
import {AccessToken, LoginButton} from 'react-native-fbsdk';

export default class FBLoginButton extends Component {
    // TODO use fbToken to register a new user then get and store the app user token
    render() {
        return (
            <View>
                <LoginButton
                    readPermissions={['email']}
                    onLoginFinished={
                        (error, result) => {
                            if (error) {
                                alert('Login failed with error: ' + error.message);
                            } else if (result.isCancelled) {
                                alert('Login was cancelled');
                            } else {
                                // alert('Login was successful with permissions: ' + result.grantedPermissions)
                                AccessToken.getCurrentAccessToken().then(
                                    (data) => {
                                        AsyncStorage.setItem('fbToken', data.accessToken.toString());
                                    }
                                );
                                this.props.navigation.navigate('App');
                            }
                        }
                    }
                    // onLogoutFinished={() => alert('User logged out')}
                />
            </View>
        );
    }
};

module.exports = FBLoginButton;