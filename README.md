# React Native App for Seckill

## Design
#### General
- Based on React Native
- One JavaScript file for each page
- One page may contain several components
- Navigation is achieved by managing all pages in Root.js

#### Dependencies
- Navigation: [react-navigation](https://github.com/react-navigation/react-navigation)
- Icons: [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) (Ionicons)
- MD5: [react-native-md5](https://github.com/kmend/react-native-md5)

## Features
#### Authority Stack
- User Register
  - MD5 for password
- User Login
  - Start with Loading page, if UserToken exists in async storage, go to Home page directly, otherwise display Login page 
#### App Stack
- Home
  - Top search bar
  - Product list
    - Scroll view with two product cards in each row
- Cart
- Profile
- TBC
  
