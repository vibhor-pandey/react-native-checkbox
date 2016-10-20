'use strict';

import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableHighlight,
} from 'react-native';

const styles = require('./style');

module.exports = React.createClass({

  render(){
    return (
      <View style={{flexDirection:'row'}}>
        <TouchableHighlight
          style={[
            styles.checkbox, 
            {borderColor: this.props.borderColor}
          ]}

          underlayColor={this.props.onPressColor}
          onPress={this.props.onPress}>

          <Image style={styles.image} source={this.props.imageURI}>
          </Image>
        
        </TouchableHighlight>
        <Text style={[styles.checkboxLabel, this.props.labelStyle]}> {this.props.label} </Text>
      </View>
      );
  }
});


