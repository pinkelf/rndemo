/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';

var Header = require('./app/header');
var MovieTicket = require('./app/ticket');
var ZhuanPan = require('./app/zhuanpan');
var Reward = require('./app/reward');
var Info = require('./app/info');
var Footer = require('./app/footer');

let ScreenWidth = Dimensions.get("window").width;

class AwesomeProject extends Component {

  render() {
    return (
      <ScrollView style={styles.container}>
      <Header/>
      <MovieTicket/>
      <ZhuanPan/>
      <Reward />
      <Info />
      <Footer/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
