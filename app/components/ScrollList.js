/**
 * Created by ellen on 22/6/18.
 */
import React, {Component} from 'react';
import {ScrollView, View, StyleSheet} from 'react-native';

import Item from '../components/ListItem';

export default class ProductList extends Component {
    render() {
        let data = this.props.goods;
        let list = [];
        for (let i in data) {
            if (i % 2 === 0) {
                let row = (
                    <View key={i} style={styles.row}>
                        <Item url={data[i].url}
                              title={data[i].title}
                              press={this.press.bind(this, data[i])}/>
                        <Item
                            url={data[parseInt(i) + 1].url}
                            title={data[parseInt(i) + 1].title}
                            press={this.press.bind(this, data[parseInt(i) + 1])}/>
                    </View>);
                list.push(row);
            }
        }

        return (
            <ScrollView style={{marginTop: 10}}>
                {list}
            </ScrollView>
        );
    }

    press(data) {
        alert("Click on: " + data.title);
    }
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginLeft: 6
    },
});