/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

// show splash screen
import SplashScreen from 'react-native-splash-screen';
console.log('showing splash screen');
SplashScreen.show();
// register app
AppRegistry.registerComponent(appName, () => App);
