/**
 * Created by ellen on 22/6/18.
 */
import React, {Component} from 'react';
import Header from '../components/Header';
import List from '../components/ScrollList';
import {View, StyleSheet} from "react-native";

let Goods = [
    {
        title: 'HP Spectre X360 13-AE010TU Touchscreen Laptop',
        url: 'https://www.jbhifi.com.au/FileLibrary/ProductResources/Images/231882-L-HI.jpg'
    },
    {
        title: 'Microsoft Surface Pro i5 256GB now with 4G LTE',
        url: 'https://www.jbhifi.com.au/FileLibrary/ProductResources/Images/241271-L-HI.jpg'
    },
    {
        title: 'Samsung NU7100 55" 4K UHD Smart LED TV',
        url: 'https://www.jbhifi.com.au/FileLibrary/ProductResources/Images/245589-L-HI.jpg'
    },
    {
        title: 'Google Pixel 2 XL 128GB (Just Black)',
        url: 'https://www.jbhifi.com.au/FileLibrary/ProductResources/Images/230435-L-HI.jpg'
    },
    {
        title: 'HP Spectre X360 13-AE010TU Touchscreen Laptop',
        url: 'https://www.jbhifi.com.au/FileLibrary/ProductResources/Images/231882-L-HI.jpg'
    },
    {
        title: 'Microsoft Surface Pro i5 256GB now with 4G LTE',
        url: 'https://www.jbhifi.com.au/FileLibrary/ProductResources/Images/241271-L-HI.jpg'
    },
    {
        title: 'Samsung NU7100 55" 4K UHD Smart LED TV',
        url: 'https://www.jbhifi.com.au/FileLibrary/ProductResources/Images/245589-L-HI.jpg'
    },
    {
        title: 'Google Pixel 2 XL 128GB (Just Black)',
        url: 'https://www.jbhifi.com.au/FileLibrary/ProductResources/Images/230435-L-HI.jpg'
    },
]

export default class Home extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Header navigation={this.props.navigation}/> // pass navigation to sub components
                <List goods={Goods}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 80
    },
});