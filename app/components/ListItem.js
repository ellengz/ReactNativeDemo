/**
 * Created by ellen on 23/6/18.
 */
import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View, StyleSheet} from "react-native";
export default class ListItem extends Component {
    render() {
        return (
            <View style={styles.item}>
                <TouchableOpacity onPress={this.props.press}>
                        <Text numberOfLines={3} style={styles.item_text}>{this.props.title}</Text>
                        <Image source={{uri:this.props.url}} style={styles.img}/>
                </TouchableOpacity>
            </View>
        );
    }
}

// TODO: replace magic numbers with better solutions (??)
const styles = StyleSheet.create({
    item: {
        flex: 1,
        marginRight: 7,
        borderWidth: 1,
        borderColor: 'oldlace',
        height: 200,
        justifyContent: 'flex-start'
    },
    img: {
        width: 145,
        height: 145,
        resizeMode: 'center'
    },
    item_text: {
        color: 'orangered',
        height: 45,
        lineHeight: 15,
        textAlign: 'left'
    }
});