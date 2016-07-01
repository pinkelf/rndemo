import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  TouchableNativeFeedback,
  BackAndroid,
} from 'react-native';


var ScreenWidth = Dimensions.get("window").width;
var ScreenHeight = Dimensions.get("window").height;

var _navigator;
class News extends Component {
  constructor(props) {
    super(props);
    _navigator = this.props.navigator;
  }

  componentDidMount() {
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
  }

  render() {
    var res = this.props.response;
    return (
      <View>
        <Text>{res.body}</Text>
      </View>
    );
  };
}

const styles = StyleSheet.create({
});

module.exports = News;
