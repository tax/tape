/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';


var React = require('react-native');
var LoginPage = require('./LoginPage');
var HomePage = require('./HomePage');
var ProfilePage = require('./ProfilePage');
var MessagePage = require('./MessagePage');

var _ = require('lodash');
var TimerMixin = require('react-timer-mixin');
var {
  AppRegistry,
  Image,
  AlertIOS,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  ListView,
  VibrationIOS,
  Navigator,
  View
} = React;


var SCREEN_WIDTH = require('Dimensions').get('window').width;
var BaseConfig = Navigator.SceneConfigs.FloatFromRight;

// var CustomLeftToRightGesture = Object.assign({}, BaseConfig.gestures.pop, {
//   // Make it snap back really quickly after canceling pop
//   snapVelocity: 8,
//   // Make it so we can drag anywhere on the screen
//   edgeHitWidth: SCREEN_WIDTH,
// });

var CustomSceneConfig = Object.assign({}, BaseConfig, {
  // A very tighly wound spring will make this transition fast
  springTension: 100,
  springFriction: 1,
  // Use our custom gesture defined above
  // gestures: {
  //   pop: CustomLeftToRightGesture,
  // }
});

var tape = React.createClass({
  mixins: [TimerMixin],
  pollInterval: null,
  counter: 0,
  url: 'http://172.16.10.147:8000',

  getInitialState: function() { 
    console.log('Get initial');
    return {
      message: null,
      isActive: false,
      username: '',
      password: ''
    }
  },

  componentDidMount: function(){
    this.pollInterval = this.setInterval(this.pollSite, 5000)
  },

  pollSite: function(){
    if(!this.state.isActive){
      console.log('User is not open for adventure');
      return;
    }
    if(this.state.username.length < 2){
      console.log('Not logged in');
      return;
    }

    console.log('Poll site');
    this.counter = this.counter + 1;
    //this.setState({ iconSize: currenSize == 175 ? 140 : currenSize + 1 });
    fetch(this.url + '/poll?username=' + this.state.username)
      .then((response) => response.json())
      .then((responseJson) => {
        if(!_.isEmpty(responseJson)){
          this.setState({message:responseJson})
          this.clearInterval(this.pollInterval);
        }
        else{
         console.log('empty');
        }
        
      })
      .catch((error) => {
        console.warn(error);
      });    
    // if(this.counter > 2){
    //   this.clearInterval(this.pollInterval);  
    // }
  },

  _onLogin(username, password){
    console.log(username, password);
    this.setState({
      username: username,
      password: password
    })
  },

  _onActivate(isActive){
    console.log('User is active');
    this.setState({
      isActive: isActive
    })
  },



  _renderScene(route, navigator) {
    if (route.id === 1) {
      return <LoginPage navigator={navigator} onLogin={this._onLogin} />
    } else if (route.id === 2) {
      return <HomePage navigator={navigator} onActivate={this._onActivate}/>
    } else if (route.id === 3) {
      return <ProfilePage navigator={navigator} />
    } else if (route.id === 4) {
      return <MessagePage navigator={navigator} message={this.state.message} />
    }

  },

  _configureScene(route) {
    return CustomSceneConfig;
  },

  render() {
    return (
      <Navigator
        initialRoute={{id: 1, }}
        renderScene={this._renderScene}
        configureScene={this._configureScene} />
    );
  }
});

AppRegistry.registerComponent('tape', () => tape);
