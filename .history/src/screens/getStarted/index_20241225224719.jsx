//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

// create a component
const GetStarted = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/image1.png')}
        style={{height: '80%', width: '100%', resizeMode: 'cover'}}
      />

      <View>
        <Text style={{fontSize: 24, color: 'white'}}>
          Unlimited entertainment, one low price.
        </Text>
      </View>
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
