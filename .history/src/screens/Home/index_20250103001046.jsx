//import liraries
import React, {Component, useEffect} from 'react';
import {View, Text} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';

// create a component
const Home = () => {
  return (
    <View style={defaultScreenStyle.container}>
      <Text>MyComponent</Text>
    </View>
  );
};

//make this component available to the app
export default Home;
