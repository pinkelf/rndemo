import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Dimensions,
  View,
  Text,
  Image,
  ListView,
  TouchableNativeFeedback,
} from 'react-native';

var News = require('../detail/news');
var ScreenWidth = Dimensions.get("window").width;
var ScreenHeight = Dimensions.get("window").height;
var NEWS_LINK = 'http://news.at.zhihu.com/api/4/news/';

class ThemeList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      pic: null,
    };
    this._renderRow = this._renderRow.bind(this);
    _navigator = this.props.navigator;
  }

  componentDidMount() {
    this.setState({
      stories:this.state.stories.cloneWithRows(this.props.listdata.stories),
      pic:this.props.pic,
    });
  }

  render() {
    return (
          <ListView style={styles.list}
            ref = 'storylist'
            dataSource = {this.state.stories}
            renderRow = {this._renderRow}
            showsVerticalScrollIndicator={false}
          />
    );
  };

  _renderRow(story){
    var image = this.state.pic;
    if(story.images){
      image = story.images[0];
    }
    return(
      <TouchableNativeFeedback onPress={() => this._onPressItem(story.id)}>
      <View style={styles.item}>
        <Text style={styles.itemtext}>{story.title}</Text>
        <Image style={styles.listimg}
          source={{uri:image}}
        />
      </View>
      </TouchableNativeFeedback>
    );
  }

  _onPressItem(id){
      _navigator.push({
        name: 'News',
        component: News,
        params: {
          id: id,
        }
      });
  }
}

const styles = StyleSheet.create({
  list: {
    flexDirection: 'column',
    backgroundColor:'white',
  },
  item: {
    margin: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor:'white',
  },
  itemtext: {
    flex:2,
    margin: 10,
    textAlign:'left',
    textAlignVertical:'center',
  },
  listimg: {
    alignSelf: 'flex-end',
    flex:1,
    width: 70,
    height: 70,
    margin:1,
    resizeMode: 'contain',
  },

});

module.exports = ThemeList;
