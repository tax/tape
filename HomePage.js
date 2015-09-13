/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var styles = require('./styles');
var MainMenu = require('./MainMenu');
var { Icon, } = require('react-native-icons');
var TimerMixin = require('react-timer-mixin');
var React = require('react-native');
var {
  Animation,
  Animated,
  Text,
  View,
  TouchableHighlight
} = React;



var HomePage = React.createClass({
  mixins: [TimerMixin],
  getInitialState() { 
    return {
      icon: 'fontawesome|heart-o',
      isLive: false,
      iconSize: 175,
    }
  },

  toProfile(){
    this.props.navigator.push({id: 3});
  },

  toMessages(){
    this.props.navigator.push({id: 4});
  },

  toggleActive(){
    this.setState({
      icon: !this.state.isLive ? 'fontawesome|heart' : 'fontawesome|heart-o',
      isLive: !this.state.isLive
    });
    this.setInterval(() => {
      var currenSize = this.state.iconSize;
      this.setState({ iconSize: currenSize == 175 ? 100 : currenSize + 1 });
    }, 20)
    this.props.onActivate(!this.state.isLive);
  },

  render() {    
    var textInfo = this.state.isLive ? <Text/> : <Text style={styles.textInfo}>Click to start your adventure</Text>;



    return (
      <View style={styles.maincontainer} >
        <View style={styles.container}>
          {textInfo}
          <TouchableHighlight onPress={this.toggleActive} underlayColor={'#B5F1C7'}>
          <Icon
              name={this.state.icon}
              size={this.state.iconSize}
              color={'#FFFFFF'}
              style={{
                width: 220,
                height: 220,
                margin: 10,
              }}
              />
          </TouchableHighlight>
        </View>
        <MainMenu navigator={this.props.navigator} ref="menu" />
      </View>
    );
  }
});

module.exports = HomePage;
