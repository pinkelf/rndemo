import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from 'react-native';

let ScreenWidth = Dimensions.get("window").width;

class Reward extends Component {

  render() {
    return (
      <View>
      <Image
      style={styles.div1}
      source={{uri: 'http://pic5.qiyipic.com/common/20160531/MOSHOU-H5-CONBG_04.jpg'}}
      />
      <View style={styles.div2}>
        <Image
        style={styles.img}
        source={{uri: 'http://pic5.qiyipic.com/common/20160531/MOSHOU-PC-CONBG_04-li1.jpg'}}
        />
        <Text style={styles.txt}>
        一等奖
        </Text>
      </View>
      <View style={styles.div3}>
        <Image
        style={styles.img}
        source={{uri:'http://pic0.qiyipic.com/common/20160601/20160601161042.jpg'}}
        />
        <Text style={styles.txt}>
        二等奖
        </Text>
      </View>
      <View style={styles.div4}>
        <Image
        style={styles.img}
        source={{uri:'http://pic5.qiyipic.com/common/20160531/MOSHOU-PC-CONBG_04-li3.jpg'}}
        />
        <Text style={styles.txt}>
        三等奖
        </Text>
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  div1: {
    width:ScreenWidth,
    height:ScreenWidth*0.7,
    resizeMode:'cover',
  },
  div2: {
    width:90,
    height:150,
    position: 'absolute',
    left:(ScreenWidth-90) /2 -110,
    top:70,
  },
  div3: {
    width:90,
    height:150,
    position: 'absolute',
    left:(ScreenWidth-90) /2,
    top:70,
  },
  div4: {
    width:90,
    height:150,
    position: 'absolute',
    left:(ScreenWidth-90) /2 +110,
    top:70,
  },
  img: {
    width:90,
    height:120,
  },
  txt: {
    width:90,
    height:30,
    color:'white',
    textAlign:'center',
    backgroundColor:'black',
  }
});

module.exports = Reward;
