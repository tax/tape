/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';


var React = require('react-native');
var LoginPage = require('./LoginPage');
var SettingsPage = require('./SettingsPage');
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

//http://paletton.com/palette.php?uid=75g0u0k7UUa3cZA5wXlaiQ5cFL3

// var tape = React.createClass({
//   mixins: [TimerMixin],



//   componentDidMount: function() {
//     // this.setInterval(
//     //   function(){ console.log('Poll server!'); },
//     //   5000
//     // );
//   },

//   getInitialState: function() { 
//     return {
//       email: '',
//       password: ''
//     }

//     // var ds = new ListView.DataSource({
//     //   rowHasChanged: (r1, r2) => r1 !== r2}); 
//     // return { dataSource: ds.cloneWithRows(['row 1', 'row 2']), }; 
//   },

//   render: function() {
//     return <LoginPage/>;
//     // return (
//     //   <View style={styles.container}>
//     //     <Text style={styles.welcome}>
//     //       Email!:
//     //     </Text>
//     //     <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} onChange={this.onEmailChange} />
//     //     <Text style={styles.welcome}>
//     //       Password:
//     //     </Text>
//     //     <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}} onChange={this.onPasswordChange} />
//     //     <TouchableHighlight underlayColor="#a9d9d4" onPress={this.onLogin}>
//     //       <Text>Submit!!!</Text>
//     //     </TouchableHighlight>
//     //   </View>
//     // );
//   }
// });

// var styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   row: { 
//     flexDirection: 'row',
//     justifyContent: 'center',
//     padding: 10,
//     backgroundColor: '#F6F6F6', 
//   }, 
//   separator: { 
//     height: 1,
//     backgroundColor: '#CCCCCC', 
//   },  
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
//   instructions: {
//     textAlign: 'center',
//     color: '#333333',
//     marginBottom: 5,
//   },
//   button: {
//     borderRadius: 4,
//     padding: 10,
//     marginLeft: 10,
//     marginRight: 10,
//     backgroundColor: "#B8C",
//   },  
// });


var SCREEN_WIDTH = require('Dimensions').get('window').width;
var BaseConfig = Navigator.SceneConfigs.FloatFromRight;

var CustomLeftToRightGesture = Object.assign({}, BaseConfig.gestures.pop, {
  // Make it snap back really quickly after canceling pop
  snapVelocity: 8,
  // Make it so we can drag anywhere on the screen
  edgeHitWidth: SCREEN_WIDTH,
});

var CustomSceneConfig = Object.assign({}, BaseConfig, {
  // A very tighly wound spring will make this transition fast
  springTension: 100,
  springFriction: 1,
  // Use our custom gesture defined above
  gestures: {
    pop: CustomLeftToRightGesture,
  }
});

var tape = React.createClass({
  _onLogin(username, password){
    console.log(username, password);
  },

  _renderScene(route, navigator) {
    if (route.id === 1) {
      return <LoginPage navigator={navigator} onLogin={this._onLogin} />
    } else if (route.id === 2) {
      return <SettingsPage navigator={navigator} />
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
