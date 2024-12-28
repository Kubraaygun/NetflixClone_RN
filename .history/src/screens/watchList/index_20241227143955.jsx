//import liraries
import React, {Component} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {Text} from 'react-native-svg';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';

// create a component
const WatchList = () => {
  return (
    <View style={defaultScreenStyle.container}>
      <Text>WatchList</Text>
    </View>
  );
};

//make this component available to the app
export default WatchList;
