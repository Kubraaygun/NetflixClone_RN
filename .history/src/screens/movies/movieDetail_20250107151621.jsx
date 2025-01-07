//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';

// create a component
const MovieDetail = ({route}) => {
  const {movieId} = route?.params;
  return (
    <View style={defaultScreenStyle.container}>
      <Text>{movieId}</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffff',
  },
});

//make this component available to the app
export default MovieDetail;
