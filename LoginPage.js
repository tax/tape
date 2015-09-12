/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var styles = require('./styles');
var React = require('react-native');
var {
  Text,
  TextInput,
  TouchableHighlight,
  VibrationIOS,
  View
} = React;



var LoginPage = React.createClass({

  getInitialState: function() { 
    return {
      email: '',
      password: ''
    }
  },

  onLogin: function(e){
    console.log(this.state.password, this.state.email);
    this.props.onLogin(this.state.email, this.state.password)
    this.props.navigator.push({id: 2,});    
  },

  onEmailChange: function(e){
    this.setState({email:e.nativeEvent.text});
  },

  onPasswordChange: function(e){
    this.setState({password:e.nativeEvent.text});
  },



  render: function() {
    return (
      <View style={styles.container}>
        <TextInput 
          style={styles.textinput} 
          onChange={this.onEmailChange}
          placeholder="Email"/>
        <TextInput
          style={styles.textinput}
          onChange={this.onPasswordChange}
          placeholder="Password"
          secureTextEntry={true}/>
        <TouchableHighlight style={styles.button} onPress={this.onLogin}>
          <Text style={styles.buttontext}>Login</Text>
        </TouchableHighlight>
      </View>
    );
  }
});

module.exports = LoginPage;