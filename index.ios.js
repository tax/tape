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

var CustomSceneConfig = Object.assign({}, BaseConfig, {
  // A very tighly wound spring will make this transition fast
  springTension: 100,
  springFriction: 1,
});

var tape = React.createClass({
  mixins: [TimerMixin],
  pollInterval: null,
  counter: 0,
  url: 'http://172.16.10.147:8000',

  getInitialState() { 
    console.log('Get initial');
    return {
      message: null,
      isActive: false,
      username: '',
      password: ''
    }
  },

  componentDidMount(){
    this.pollInterval = this.setInterval(this.pollSite, 5000)
  },

  pollSite(){
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
          AlertIOS.alert(
            'Adventure awaits',
            'You have a new message',
            [
              {text: 'Dismiss', onPress: () => console.log('Foo Pressed!')},
              {text: 'Check', onPress: () => this.refs.nav.push({id:4}) },
            ]
          )

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
        configureScene={this._configureScene} 
        ref="nav"/>
    );
  }
});

AppRegistry.registerComponent('tape', () => tape);
