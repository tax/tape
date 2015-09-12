var React = require('react-native');
var {
  StyleSheet
} = React;


var styles = StyleSheet.create({
  textinput: {
    padding: 10,
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
    height: 60, 
    borderColor: '#86DEA1', 
    backgroundColor: '#FFFFFF',
    borderRadius: 4,
    borderWidth: 2
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B5F1C7',
  },
  button: {
    borderRadius: 4,
    padding: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#86DEA1",
  },  
  buttontext:{
    color: 'white',
    fontSize: 25,
    //fontFamily: 'Trebuchet MS'
  }
});

module.exports = styles;