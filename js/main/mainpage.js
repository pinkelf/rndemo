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
  DrawerLayoutAndroid,
  View,
  Text,
  Image,
  ToolbarAndroid,
} from 'react-native';

var MainViewPager = require('./viewpager');
var MainDrawer = require('./maindrawer');
var MainList = require('./list');

var ScreenWidth = Dimensions.get("window").width;
var ScreenHeight = Dimensions.get("window").height;

var IMG_URL = 'http://news-at.zhihu.com/api/4/start-image/1080*1776';
var NEWS_URL = 'http://news-at.zhihu.com/api/4/news/latest';

class MainPage extends Component {

  _renderNavigationView(){
    return (
      <MainDrawer navigator={this.props.navigator}/>
    );
  };

  constructor(props) {
    super(props);
    this.state = {
      imgLink: null,
      splashed: false,
      loaded: false,
      stories: null,
      top_stories: null,
    };
    this._renderNavigationView = this._renderNavigationView.bind(this);
  }

  componentDidMount() {
    fetch(IMG_URL).then((response) => response.json())
    .then((responseData) => {
      this.setState({
        imgLink: responseData.img,
      });
      this.timer = setTimeout(
        () => {
          this.setState({
            splashed: true,
          })
        }, 2000
      )
    });

    fetch(NEWS_URL).then((response) => response.json())
    .then((responseData) => {
      this.setState({
        stories: responseData.stories,
        top_stories: responseData.top_stories,
        loaded: true,
      })
    });
  }

  componentWillUnmount() {
    this.timer && clearTimeout(this.timer);
  }

  render() {
    if(!this.state.splashed || !this.state.loaded){
      return (
        <Image style={styles.logo}
          source={{uri: this.state.imgLink}}
        />
      );
    }

    return (
        <DrawerLayoutAndroid
          ref='drawer'
          drawerWidth={260}
          drawerPosition={DrawerLayoutAndroid.positions.Left}
          renderNavigationView={this._renderNavigationView}>

          <View style={styles.container}>
            <ToolbarAndroid
              navIcon={require('../../res/icon.png')}
              title={''}
              titleColor='rgb(0, 130, 215)'
              style={styles.toolbar}
              onIconClicked={()=>this.refs.drawer.openDrawer()} />
            <MainViewPager pagerdata={this.state.top_stories} navigator={this.props.navigator}/>
            <MainList listdata={this.state.stories} navigator={this.props.navigator}/>
          </View>
        </DrawerLayoutAndroid>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
    flexDirection: 'column',
  },
  toolbar: {
    backgroundColor: 'white',
    height: 56,
  },
  header: {
    width:ScreenWidth,
    height:20,
    color:'blue',
    fontSize: 16,
    margin:10,
  },
  logo: {
    width: ScreenWidth,
    height: ScreenHeight,
    resizeMode: 'cover',
  },

});

module.exports = MainPage;
