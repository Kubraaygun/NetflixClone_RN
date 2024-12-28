//import liraries
import React, {Component} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {Text} from 'react-native-svg';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useSelector} from 'react-redux';

// create a component
const WatchList = () => {
  const {WatchList} = useSelector(state => state.WatchList);
  return (
    <View style={defaultScreenStyle.container}>
      <Text>WatchList</Text>
    </View>
  );
};

//make this component available to the app
export default WatchList;
