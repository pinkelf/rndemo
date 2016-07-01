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
} from 'react-native';

var MainPage = require('./js/main/mainpage');
var ScreenWidth = Dimensions.get("window").width;

class AwesomeProject extends Component {

  renderScene(route, navigator) {
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
