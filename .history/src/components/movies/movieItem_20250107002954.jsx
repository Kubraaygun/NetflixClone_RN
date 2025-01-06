//import liraries
import React, {Component} from 'react';
import {View, Image, StyleSheet} from 'react-native';

// create a component
const MovieItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default MovieItem;
