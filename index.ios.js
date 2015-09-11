/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';


var React = require('react-native');
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
  View
} = React;

var tape = React.createClass({
  mixins: [TimerMixin],

  componentDidMount: function() {
    this.setInterval(
      function(){ console.log('Poll server!'); },
      5000
    );
  },

  getInitialState: function() { 
    var ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2}); 
    return { dataSource: ds.cloneWithRows(['row 1', 'row 2']), }; 
  },

  _onPressButton: function(e){
    VibrationIOS.vibrate();
    AlertIOS.alert(
      null,
      null,
      [
        {text: 'Button', onPress: () => console.log('Button Pressed!')},
      ]);
    
  },

  render: function() {
    return (

      <View style={styles.container}>
        <ListView dataSource={this.state.dataSource} renderRow={(rowData) => <Text style={styles.row}>{rowData}</Text>} />
        <Text style={styles.welcome}>
          Rowan sucks!
        </Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1}}  />
        <TouchableHighlight underlayColor="#a9d9d4" onPress={this._onPressButton}>
          <Text>Submit!!!</Text>
        </TouchableHighlight>
        <Image style={{width: 400, height: 400}} source={{uri: 'http://facebook.github.io/react/img/logo_og.png'}} />        
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  row: { 
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6', 
  }, 
  separator: { 
    height: 1,
    backgroundColor: '#CCCCCC', 
  },  
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('tape', () => tape);
