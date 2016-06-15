import React, { Component } from 'react';
import {
  Alert,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';

let ScreenWidth = Dimensions.get("window").width;
var rewards=new Array("一等奖","就差一点","二等奖","再抽一次","三等奖","谢谢参与","再来一次","谢谢参与");

class ZhuanPan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rotateV: new Animated.Value(0),
    };
  }

  render() {
    return (
      <View>
      <Image
        style={styles.div1}
        source={{uri: 'http://pic5.qiyipic.com/common/20160531/MOSHOU-H5-CONBG_03.jpg'}}
      />
      <Image
        style={styles.div2}
        source={{uri: 'http://pic6.qiyipic.com/common/20160603/MOSHOU-PC-ZHUANPANBG222.png'}}
      />
      <Animated.Image style={[styles.div3, {transform: [{
        rotate:this.state.rotateV.interpolate({
          inputRange:[0,5*rewards.length],
          outputRange:['0deg','1800deg']
        })
      }]}]}
        source={{uri: 'http://pic5.qiyipic.com/common/20160531/MOSHOU-PC-ZHUANPAN.png'}}
      />
      <TouchableOpacity onPress={() => this._onPressButton(this.state.rotateV)} style={styles.div4}>
      <Image style={styles.div5}
        source={{uri: 'http://pic5.qiyipic.com/common/20160531/MOSHOU-PC-ZHUANPANBG-BTN.png'}}
      />
      </TouchableOpacity>
      </View>
    );
  }

  _onPressButton(rotateValue){
    var result = Math.floor(Math.random()*rewards.length);
    rotateValue.setValue(0);
    Animated.timing(rotateValue, {
        toValue: rewards.length*5 - result,
        duration: 2000,
        easing: Easing.linear
    }).start(()=>(this._popupResult(result)));
  }


  _popupResult(result){
    Alert.alert(
            '抽奖结果',
            rewards[result],
            [
              {text: 'OK', onPress: () => console.log('OK Pressed!')},
            ]
          )
  }
}

const styles = StyleSheet.create({
  div1: {
    width:ScreenWidth,
    height:ScreenWidth*1.25,
    resizeMode:'cover',
  },
  div2: {
    resizeMode: 'contain',
    width:240,
    height:240,
    position: 'absolute',
    left:(ScreenWidth-240)/2,
    top:60,
  },
  div3: {
    resizeMode: 'contain',
    width:210,
    height:210,
    position: 'absolute',
    left:(ScreenWidth-210)/2,
    top:75,
  },
  div4: {
    width:70,
    height:70,
    position: 'absolute',
    left:(ScreenWidth-70)/2,
    top:145,
  },
  div5: {
    width:70,
    height:70,
    position: 'absolute',
    top:0,
    left:0,
  }
});

module.exports = ZhuanPan;
