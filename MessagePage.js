/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var MainMenu = require('./MainMenu');
var _ = require('lodash');
var Modal   = require('react-native-modalbox');
var styles = require('./styles');
var { Icon, } = require('react-native-icons');
var TimerMixin = require('react-timer-mixin');
var React = require('react-native');
var {
  Text,
  TouchableHighlight,
  View
} = React;



var Message = React.createClass({
  mixins: [TimerMixin],

  getInitialState: function() { 
    return {
      iconSize: 175,
    }
  },

  componentDidMount: function(){
    this.setInterval(function(){
      var currenSize = this.state.iconSize;
      this.setState({ iconSize: currenSize == 175 ? 140 : currenSize + 1 });
    }, 20)
  },



  render: function() {
    return (
        <View style={styles.container}>
          <Text style={styles.textInfo}>Click to start your date</Text>
          <TouchableHighlight underlayColor={'#B5F1C7'} onPress={this.props.onClick}>
            <Icon
              name={'fontawesome|question-circle'}
              size={this.state.iconSize}
              color={'#FFFFFF'}
              style={{
                width: 220,
                height: 220,
                margin: 10,
              }}
              />
          </TouchableHighlight>
        </View>
    );
  }

});

var MessagePage = React.createClass({

  getInitialState: function() { 
    return {
      email: '',
      password: '',
      hint: '',
      hintIsOpen: false,
      hintCounter: 0
    }
  },

  getDefaultProps: function() {
    return {
      message: {
        time: 'Today 19:00',
        location: 'Fourdigits',
        hints:[
          'Haar kleur',
          'Shoes',
          'Mad men fan'
        ]
      }
    };
  },  

  openTime: function(){
    this.refs.time.open();
  },
  
  openLocation: function(){
    this.refs.location.open();
  },

  openNextHint: function(){
    //this.refs.hints.close();
    console.log(this.state.hintCounter);
    this.setState({
      hint: this.props.message.hints[this.state.hintCounter]
    })
    var newCounter = this.state.hintCounter + 1;
    this.setState({
      hintCounter: newCounter
    })
    if(this.props.message.hints.length >= newCounter ){
      this.refs['hint' + newCounter.toString()].open();
    }
    else{
      this.refs.final.open();
    }    
  },

  render: function() {
    var message = <Message onClick={this.openTime}/>
    if(_.isNull(this.props.message) ){
      message = <View style={styles.container}><Text style={styles.textInfo}>No messages at this time</Text></View>;
    }
    
    return (
      <View style={styles.maincontainer} >
        {message}
        
        <Modal 
            style={{ justifyContent: 'center', alignItems: 'center', height: 300, width: 300 }} 
            position={"center"} 
            ref={"time"}
            onClosed={this.openLocation}>
            <Icon
              name={'fontawesome|clock-o'}
              size={50}
              color='#86DEA1'
              style={{
                width: 50,
                height: 50,
                margin: 10,
              }}
              />
            <Text style={[styles.hintText, styles.hintTime]}>{ _.isNull(this.props.message)? '' : this.props.message.time }</Text>
        </Modal>

        <Modal 
            style={{ justifyContent: 'center', alignItems: 'center', height: 300, width: 300 }} 
            position={"center"} 
            ref={"location"}
            onClosed={this.openNextHint}>
            <Icon
              name={'fontawesome|location-arrow'}
              size={50}
              color='#86DEA1'
              style={{
                width: 50,
                height: 50,
                margin: 10,
              }}
              />
            <Text style={[styles.hintText, styles.hintTime]}>{ _.isNull(this.props.message)? '' : this.props.message.location}</Text>
        </Modal>

        <Modal 
            style={{ justifyContent: 'center', alignItems: 'center', height: 300, width: 300 }} 
            position={"center"}
            onClosed={this.openNextHint}
            ref={"hint1"}>
            <Icon
              name={'fontawesome|user'}
              size={50}
              color='#86DEA1'
              style={{
                width: 50,
                height: 50,
                margin: 10,
              }}
              />
            <Text style={[styles.hintText, styles.hintTime]}>{this.state.hint}</Text>
        </Modal>


        <Modal 
            style={{ justifyContent: 'center', alignItems: 'center', height: 300, width: 300 }} 
            position={"center"}
            onClosed={this.openNextHint}
            ref={"hint2"}>
            <Icon
              name={'fontawesome|user'}
              size={50}
              color='#86DEA1'
              style={{
                width: 50,
                height: 50,
                margin: 10,
              }}
              />
            <Text style={[styles.hintText, styles.hintTime]}>{this.state.hint}</Text>
        </Modal>

        <Modal 
            style={{ justifyContent: 'center', alignItems: 'center', height: 300, width: 300 }} 
            position={"center"}
            onClosed={this.openNextHint}
            ref={"hint3"}>
            <Icon
              name={'fontawesome|user'}
              size={50}
              color='#86DEA1'
              style={{
                width: 50,
                height: 50,
                margin: 10,
              }}
              />
            <Text style={[styles.hintText, styles.hintTime]}>{this.state.hint}</Text>
        </Modal>

        <Modal 
            style={{ justifyContent: 'center', alignItems: 'center', height: 300, width: 300 }} 
            position={"center"}
            onClosed={this.openNextHint}
            ref={"hint4"}>
            <Icon
              name={'fontawesome|user'}
              size={50}
              color='#86DEA1'
              style={{
                width: 50,
                height: 50,
                margin: 10,
              }}
              />
            <Text style={[styles.hintText, styles.hintTime]}>{this.state.hint}</Text>
        </Modal>


        <Modal 
            style={{ justifyContent: 'center', alignItems: 'center', height: 300, width: 300, backgroundColor:'red'}} 
            position={"center"}
            ref={"final"}>
            <Icon
              name={'fontawesome|user'}
              size={50}
              color='#FFFFFF'
              style={{
                width: 50,
                height: 50,
                margin: 10,
              }}
              />
            <Text style={[styles.warningText, styles.hintTime]}>No more hints for you!</Text>
        </Modal>

        <MainMenu navigator={this.props.navigator} />
      </View>
    );
  }
});

module.exports = MessagePage;