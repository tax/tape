var { Icon, } = require('react-native-icons');
var React = require('react-native');
var {
  View,
  TouchableHighlight
} = React;


var MainMenu = React.createClass({
  getInitialState: function() { 
    var routes = this.props.navigator.getCurrentRoutes();
    var routeId = routes[routes.length - 1].id
    var page = 'home';
    // if(routeId == 2){
    //   page = 'home';
    // }
    if(routeId == 3){
      page = 'profile';
    }
    if(routeId == 4){
      page = 'messages'; 
    }
    return { page: page }
  },

  toProfile: function(){
    this.props.navigator.push({id: 3});
  },

  toMessages: function(){
    this.props.navigator.push({id: 4});
  },

  toHome: function(){
    this.props.navigator.push({id: 2});
  },


  render: function() {    
    return (
      <View style={{flexDirection: 'row', height: 70, padding: 0}}>
        <View style={{
          backgroundColor: '#86DEA1',
          flex: 0.5,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 0,
          borderColor: '#86DEA1',
          borderRightColor: '#B5F1C7',
        }}>
        <TouchableHighlight onPress={this.toHome} underlayColor={'#86DEA1'}>
          <Icon
              name={'ion|home'}
              size={35}
              color={ this.state.page == 'home' ? '#FFFFFF' : '#B5F1C7'}
              style={{
                width: 50,
                height: 50,
                margin: 10,
              }}
              />
          </TouchableHighlight>
        </View>      
        <View style={{
          backgroundColor: '#86DEA1',
          flex: 0.5,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 0,
          borderColor: '#86DEA1',
          borderRightColor: '#B5F1C7',
          borderLeftColor: '#B5F1C7',
        }}>
        <TouchableHighlight onPress={this.toMessages} underlayColor={'#86DEA1'}>
          <Icon
              name={'ion|chatbubbles'}
              size={35}
              color={ this.state.page == 'messages' ? '#FFFFFF' : '#B5F1C7'}
              style={{
                width: 50,
                height: 50,
                margin: 10,
              }}
              />
          </TouchableHighlight>
        </View>
        <View style={{
          backgroundColor: '#86DEA1',
          flex: 0.5,
          justifyContent: 'center',
          alignItems: 'center',
          borderWidth: 0,
          borderColor: '#86DEA1',
          borderLeftColor: '#B5F1C7',
        }}>
        <TouchableHighlight onPress={this.toProfile} underlayColor={'#86DEA1'}>
          <Icon
              name={'ion|person'}
              size={35}
              color={ this.state.page == 'profile' ? '#FFFFFF' : '#B5F1C7'}
              style={{
                width: 50,
                height: 50,
                margin: 10,
              }}
              />
          </TouchableHighlight>          
        </View>          
      </View>);
  }
});    

module.exports = MainMenu;      
