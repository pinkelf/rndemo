/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  Navigator,
  BackAndroid,
} from 'react-native';

var MainPage = require('./js/main/mainpage');

var _navigator;
BackAndroid.addEventListener('hardwareBackPress', function() {
  if(_navigator == null){
    return false;
  }
  if(_navigator.getCurrentRoutes().length === 1){
    return false;
  }
  _navigator.pop();
  return true;
});

class AwesomeProject extends Component {

  renderScene(route, navigator) {
    _navigator = navigator;
    let Component = route.component;
    return <Component {...route.params} navigator={navigator} />
  }

  render() {
    return (
      <Navigator
        initialRoute={{name: 'MainPage', component: MainPage}}
        configureScene={() => {
          return Navigator.SceneConfigs.FloatFromRight;
        }}
        renderScene={this.renderScene}
      />
    );
  };
}

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
