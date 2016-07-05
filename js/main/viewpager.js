import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  ViewPagerAndroid,
  TouchableOpacity,
} from 'react-native';


var News = require('../detail/news');
var ScreenWidth = Dimensions.get("window").width;
var NEWS_LINK = 'http://news.at.zhihu.com/api/4/news/';

class MainViewPager extends Component {
  constructor(props) {
    super(props);
    this.state = {
      top_stories: null,
      page: 0,
      animationsAreEnabled: true,
      progress: {
        position: 0,
        offset: 0,
      },
    };
    this.onPageSelected = this.onPageSelected.bind(this);
    this.onPageScroll = this.onPageScroll.bind(this);
    this._onPressItem = this._onPressItem.bind(this);
  }

  onPageSelected(e) {
    this.setState({page: e.nativeEvent.position});
  }

  onPageScroll(e) {
    this.setState({progress: e.nativeEvent});
  }

  componentDidMount() {
    this.setState({
      top_stories:this.props.pagerdata,
    });
  }

  render() {
    var pages = [];
    var data = this.props.pagerdata;
    for(var i=0;i < data.length;i++){
      pages.push(
        <View  key={i}  style={styles.pageStyle} collapsable={false}>
        <TouchableOpacity onPress={()=> this._onPressItem()}>
          <Image
            style={styles.image}
            source={{uri: data[i].image}}
          />
          </TouchableOpacity>
          <Text style={styles.txt}>{data[i].title}</Text>
          </View>
      );
    }
    return (
      <ViewPagerAndroid
          style={styles.viewPager}
          initialPage={0}
          onPageScroll={this.onPageScroll}
          onPageSelected={this.onPageSelected}
          ref={viewPager => { this.viewPager = viewPager; }}>
          {pages}
        </ViewPagerAndroid>
    );
  };

  _onPressItem(){
      this.props.navigator.push({
        name: 'News',
        component: News,
        params: {
          id: this.props.pagerdata[this.state.page].id,
        }
      });
  }
}

const styles = StyleSheet.create({
  viewPager: {
    alignItems: 'center',
    height: 220,
    width:ScreenWidth,
  },
  pageStyle: {
    alignItems: 'center',
  },
  image: {
    width:ScreenWidth,
    height:220,
    resizeMode: 'cover',
  },
  txt:{
    position: 'absolute',
    bottom: 0,
    width:ScreenWidth,
    height:50,
    color:'white',
    backgroundColor:'rgba(0, 0, 0, 0.3)',
    textAlign:'left',
    textAlignVertical:'center',
    fontSize: 14,
  },
});

module.exports = MainViewPager;
