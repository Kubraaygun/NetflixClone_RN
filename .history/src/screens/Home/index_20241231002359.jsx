//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';

// create a component
const Home = () => {
  return (
    <SafeAreaView style={defaultScreenStyle.container}>
      <Text>MyComponent</Text>
    </SafeAreaView>
  );
};

//make this component available to the app
export default Home;
