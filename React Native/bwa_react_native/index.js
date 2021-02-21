/**
 * @format
 */

import {AppRegistry, LogBox} from 'react-native';
import 'react-native-gesture-handler';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
LogBox.ignoreLogs([
  'Remote debugger',
  'AsyncStorage has been extracted from react-native core and will be removed in a future release.',
  'Warning: Async Storage has been extracted from react-native core',
  'Warning: Each',
  'Warning: Failed',
]);
