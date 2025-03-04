//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// create a component
const GetStarted = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/image1.png')}
        style={{height: '90%', width: '100%'}}
      />
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
