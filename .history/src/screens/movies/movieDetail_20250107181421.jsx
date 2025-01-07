//import liraries
import React, {useEffect} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';

// create a component
const MovieDetail = ({route}) => {
  const {movieId} = route?.params;

  useEffect(() => {
    first;
    return () => {};
  }, [third]);
  return (
    <View style={defaultScreenStyle.container}>
      <ScrollView></ScrollView>
    </View>
  );
};

//make this component available to the app
export default MovieDetail;
