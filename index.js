/**
 * @format
 */

import 'react-native-gesture-handler';
import { AppRegistry, LogBox } from 'react-native';
import App from './src/app';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);
LogBox.ignoreAllLogs();
