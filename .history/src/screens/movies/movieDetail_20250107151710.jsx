//import liraries
import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';

// create a component
const MovieDetail = ({route}) => {
  const {movieId} = route?.params;
  return (
    <View style={defaultScreenStyle.container}>
      <ScrollView></ScrollView>
    </View>
  );
};

//make this component available to the app
export default MovieDetail;
