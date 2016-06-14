import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  Image,
  Dimensions,
} from 'react-native';

let ScreenWidth = Dimensions.get("window").width;

class Footer extends Component {

  render() {
    return (
      <View>
      <Image
        style={styles.div1}
        source={{uri: 'http://pic5.qiyipic.com/common/20160531/MOSHOU-H5-CONBG_06.jpg'}}
      />
      <Image
        style={styles.div2}
        source={{uri:'http://pic5.qiyipic.com/common/20160531/MOSHOU-PC-CON-BTN1.png'}}
      />
      <Image
        style={styles.div3}
        source={{uri:'http://pic5.qiyipic.com/common/20160531/MOSHOU-PC-CON-BTN2.png'}}
      />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  div1: {
    width:ScreenWidth,
    height:ScreenWidth*0.21,
    resizeMode:'cover',
  },
  div2: {
    width:200,
    height:32,
    position:'absolute',
    top:10,
    left:20,
    resizeMode:'cover',
  },
  div3: {
    width:88,
    height:32,
    position:'absolute',
    top:10,
    right:20,
    resizeMode:'cover',
  },
});

module.exports = Footer;
