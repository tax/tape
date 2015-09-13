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

  getInitialState() { 
    return {
      email: '',
      password: ''
    }
  },

  onLogin(e){
    this.props.onLogin(this.state.email, this.state.password)
    this.props.navigator.push({id: 2,});    
  },

  onEmailChange(e){
    this.setState({email:e.nativeEvent.text});
  },

  onPasswordChange(e){
    this.setState({password:e.nativeEvent.text});
  },

  render() {
    return (
      <View style={styles.maincontainer}>
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
            <Text style={styles.buttontext}>       Login       </Text>
          </TouchableHighlight>
        </View>
        <View style={{flexDirection: 'row', padding: 0, height:150}}>
        </View>
      </View>
    );
  }
});

module.exports = LoginPage;