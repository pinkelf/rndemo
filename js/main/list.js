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

var _navigator;
class MainList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
    };
    this._renderRow = this._renderRow.bind(this);
    _navigator = this.props.navigator;
  }

  componentDidMount() {
    this.setState({
      stories:this.state.stories.cloneWithRows(this.props.listdata),
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
    return(
      <TouchableNativeFeedback onPress={() => this._onPressItem(story.id)}>
      <View style={styles.item}>
        <Text style={styles.itemtext}>{story.title}</Text>
        <Image style={styles.listimg}
          source={{uri: story.images[0]}}
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
    margin: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor:'white',
  },
  itemtext: {
    flex:3,
    margin: 15,
    textAlign:'left',
    textAlignVertical:'center',
  },
  listimg: {
    flex:1,
    width: 75,
    height: 75,
    margin:1,
    resizeMode: 'contain',
  },

});

module.exports = MainList;
