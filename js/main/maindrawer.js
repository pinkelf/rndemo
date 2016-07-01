import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ListView,
  TouchableNativeFeedback,
  ToastAndroid,
  Navigator,
} from 'react-native';

var ThemeList = require('../detail/themelist');
var THEME_URL = 'http://news-at.zhihu.com/api/4/themes';
var THEME_LIST = 'http://news-at.zhihu.com/api/4/theme/';

class MainDrawer extends Component {
  _renderRow(menu) {
      return (
        <TouchableNativeFeedback onPress={() => this._pressRow(menu.id)}>
          <View style={styles.draweritem}>
            <Image
            style={styles.drawerimage}
            source={{uri: menu.thumbnail}}
            />
              <View style={styles.drawerview} >
                <Text style={styles.drawercategory}>{menu.name}</Text>
                <Text style={styles.drawerdesc}>{menu.description}</Text>
              </View>
          </View>
        </TouchableNativeFeedback>
      );
  }

  _pressRow(id){
    ToastAndroid.show(THEME_URL+'/'+id, ToastAndroid.SHORT);
    fetch(THEME_LIST+id).then((response) => response.json())
    .then((responseData) =>{
      this.props.navigator.push({
        name: 'ThemeList',
        component: ThemeList,
        params: {
          listdata: responseData,
        }
      });
    }).done();
  }


  _renderHeader(){
    return (
      <Image
        style={styles.drawerlogo}
        source={require('../../res/banner.png')}
      />
    );
  }

  fetchData() {
  fetch(THEME_URL)
    .then((response) => response.json())
    .then((responseData) => {
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(responseData.others),
        loaded: true,
    });
    })
    .done();
  }

  constructor(props) {
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
    this.fetchData = this.fetchData.bind(this);
    this._renderRow = this._renderRow.bind(this);
    this._pressRow = this._pressRow.bind(this);
  }

  componentDidMount() {
    this.fetchData();
  }

  render() {
    if(!this.state.loaded){
      return (
        <View style={styles.drawercontainer}>
          <Text>
            Loading...
          </Text>
        </View>
      );
    }
    return (
      <ListView
        ref = 'drawerlist'
        dataSource = {this.state.dataSource}
        renderRow = {this._renderRow}
        renderHeader = {this._renderHeader}
        showsVerticalScrollIndicator={false}
      />
    );
  }
}

var styles = StyleSheet.create({
  drawercontainer: {
    width: 260,
  },
  drawerlogo: {
    width: 260,
    height: 170,
    resizeMode: 'stretch',
  },
  draweritem: {
    width: 260,
    height: 65,
    flexDirection: 'row',
    backgroundColor: 'aliceblue',
  },
  drawerimage: {
    width: 64,
    height: 64,
    borderWidth: 1,
    borderColor: '#F5FCFF',
  },
  drawerview: {
    flex:1,
    flexDirection: 'column',
    margin:5,
  },
  drawercategory: {
    width: 180,
    flex: 2,
    fontSize: 16,
    color:'black',
  },
  drawerdesc: {
    width: 180,
    flex: 3,
    fontSize: 12,
    color:'darkgray',
  },
});

module.exports = MainDrawer;
