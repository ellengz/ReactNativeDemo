import { AppRegistry } from 'react-native';
import App from './App';
import { YellowBox } from 'react-native';

AppRegistry.registerComponent('SeckillApp', () => App);
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated', 'Module RCTImageLoader']);

