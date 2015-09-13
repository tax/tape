/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var styles = require('./styles');
var MainMenu = require('./MainMenu');
var React = require('react-native');
var {
  Text,
  TextInput,
  TouchableHighlight,
  VibrationIOS,
  View
} = React;



var ProfilePage = React.createClass({

  getInitialState: function() { 
    return {
      email: '',
      password: ''
    }
  },

  render: function() {
    return (
      <View style={styles.maincontainer} >
        <View style={styles.container}>
          <Text style={styles.profileinfo}>Whoops</Text>
        </View>
        <MainMenu navigator={this.props.navigator} />
      </View>
    );
  }
});

module.exports = ProfilePage;