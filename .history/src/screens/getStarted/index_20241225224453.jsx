//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';

// create a component
const GetStarted = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/images/image1.png')}
        style={{
          flex: 1,
          resizeMode: 'cover',
        }}></ImageBackground>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default GetStarted;
