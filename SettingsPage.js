/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var styles = require('./styles');
var React = require('react-native');
var {
  Text,
  View
} = React;



var SettingsPage = React.createClass({

  // getInitialState: function() { 
  //   return {
  //     email: '',
  //     password: ''
  //   }
  // },

  // onLogin: function(e){
  //   VibrationIOS.vibrate();
  //   console.log(this.state.password, this.state.email);
  //   // AlertIOS.alert(
  //   //   null,
  //   //   null,
  //   //   [
  //   //     {text: 'Button', onPress: () => console.log('Button Pressed!')},
  //   //   ]);
    
  // },

  // onEmailChange: function(e){
  //   this.setState({email:e.nativeEvent.text});
  // },

  // onPasswordChange: function(e){
  //   this.setState({password:e.nativeEvent.text});
  // },



  render: function() {
    return (
      <View style={styles.container}>
        <Text style={styles.buttontext}>Setting page</Text>
      </View>
    );
  }
});

module.exports = SettingsPage;

//AppRegistry.registerComponent('tape', () => tape);
