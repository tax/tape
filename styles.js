var React = require('react-native');
var {
  StyleSheet
} = React;

//http://paletton.com/#uid=75g0u0k7UUa3cZA5wXlaiQ5cFL3
var styles = StyleSheet.create({
  textinput: {
    padding: 10,
    marginLeft: 10,
    marginTop: 10,
    marginRight: 10,
    height: 60, 
    borderColor: '#86DEA1', 
    backgroundColor: '#FFFFFF',
    fontFamily: 'Roboto-Regular',
    borderRadius: 4,
    borderWidth: 2
  },
  profileinput: {
    padding: 10,
    marginLeft: 50,
    marginTop: 10,
    marginRight: 10,
    height: 60, 
    borderColor: '#86DEA1', 
    backgroundColor: '#FFFFFF',
    borderRadius: 0,
    fontFamily: 'Roboto-Regular',
    borderWidth: 1
  },
  profileinfo: {
    color: '#FFFFFF',
    fontSize: 25,
    fontFamily: 'Roboto-Bold'
  },  
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B5F1C7',
    fontFamily: 'Roboto-Bold',
  },
  maincontainer: {
    flex: 1, 
    flexDirection: 'column',
    backgroundColor: '#B5F1C7',
  },  
  button: {
    borderRadius: 0,
    padding: 10,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#86DEA1",
  },  
  buttontext:{
    color: 'white',
    fontSize: 25,
    fontFamily: 'Roboto-Bold',
  },
  iconBig: {
    width: 220,
    height: 220,
    margin: 10,
    color: '#FFFFFF'
  },
  textInfo: {
    fontFamily: 'Roboto-Black',//'Apple SD Gothic Neo',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  messageText:{
    fontFamily: 'Roboto-Black',//'Apple SD Gothic Neo',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF'    
  },
  hintText:{
    fontFamily: 'Roboto-Black',//'Apple SD Gothic Neo',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#86DEA1'    
  },
  warningText:{
    fontFamily: 'Roboto-Black',//'Apple SD Gothic Neo',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFFFFF'    
  },  
  hintTime: {
    fontSize: 45,
  }
});

module.exports = styles;