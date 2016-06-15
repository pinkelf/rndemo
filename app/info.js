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

class Info extends Component {

  render() {
    return (
    <View>
    <Image
      style={styles.div1}
      source={{uri: 'http://pic5.qiyipic.com/common/20160531/MOSHOU-H5-CONBG_05.jpg'}}
      />
      <Text style={styles.div2}>
      1，本次抽奖活动为爱奇艺VIP会员专享，加入会员即可享有参与权利。
      2，每人每天可抽奖1次，购买或续费会员可以增加一次抢票机会。
      3，一等奖、三等奖将自动绑定到您当前账户，请注意查看您的VIP到期时限；二等奖将以送短信形式发送影票套票券码至您的手机，请认真填写手机号，以便影票券码的发放。
      **活动最终解释权归爱奇艺所有。
      关注【会员俱乐部】，体验更多VIP会员特权~
      </Text>
    </View>
  );
}
}

const styles = StyleSheet.create({
  div1: {
    width:ScreenWidth,
    height:ScreenWidth*0.92,
    resizeMode:'cover',
  },
  div2: {
    position: 'absolute',
    left:40,
    width:ScreenWidth-80,
    top:100,
  },
});

module.exports = Info;
