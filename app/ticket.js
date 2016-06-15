import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';

let ScreenWidth = Dimensions.get("window").width;

class MovieTicket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotateValue: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.startAni();
  }

  startAni() {
      this.state.rotateValue.setValue(0);
      Animated.timing(this.state.rotateValue, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear
      }).start(() => this.startAni());
  }

  render() {
    return (
      <View>
        <Image
        style={styles.div1}
        source={{uri: 'http://pic5.qiyipic.com/common/20160531/MOSHOU-H5-CONBG_02.jpg'}}
        />
        <Image
        style={styles.div2}
        source={{uri: 'http://pic1.qiyipic.com/common/20160601/MOSHOU-PC-juxing.png'}}
        />
        <Animated.Image
        style={[styles.div3, {transform: [{
          rotate:this.state.rotateValue.interpolate({
            inputRange:[0,1],
            outputRange:['0deg','360deg']
          })
        }]}]}
        source={{uri:'http://pic1.qiyipic.com/common/20160601/MOSHOU-PC-juxing-midstar.png'}}
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({
  div1: {
    width:ScreenWidth,
    height:ScreenWidth*0.55,
    resizeMode:'cover',
  },
  div2: {
    width:60,
    height:45,
    resizeMode:'cover',
    position: 'absolute',
    left:(ScreenWidth-60) /2,
    top:78,
  },
  div3: {
    width:45,
    height:45,
    resizeMode:'cover',
    position: 'absolute',
    left:(ScreenWidth-45)/2,
    top:78,
  },
});

module.exports = MovieTicket;
