import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  TouchableNativeFeedback,
  WebView,
  ProgressBarAndroid,
} from 'react-native';


var ScreenWidth = Dimensions.get("window").width;
var ScreenHeight = Dimensions.get("window").height;
var NEWS_LINK = 'http://news.at.zhihu.com/api/4/news/';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded:false,
      detail:null,
    }
    _navigator = this.props.navigator;
  }

  componentDidMount() {
    fetch(NEWS_LINK+this.props.id).then((response) => response.json())
    .then((responseData) => {
      this.setState({
        detail: responseData,
        loaded: true,
      });
    }).done();
  }

  render() {
    if(this.state.loaded){
      var res = this.state.detail;
      var h5 = '<!DOCTYPE html><html><head><link rel="stylesheet" type="text/css" href="'
            + res.css[0]
            + '" /></head><body>' + res.body
            + '</body></html>';
      return (
        <View>
          <WebView
          style={styles.content}
          source={{html:h5}}
          />
        </View>
      );
    }else{
      return (
        <View>
          <ProgressBarAndroid style={styles.progress} styleAttr="Inverse" />
        </View>
      );
    }
  };
}

const styles = StyleSheet.create({
  content: {
    width:ScreenWidth,
    height:ScreenHeight,
  },
  progress: {
    width:100,
    height:ScreenHeight,
    alignSelf:'center',
  }
});

module.exports = News;
