//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {ThemeColors} from '../../theme/themeColors';
import {useSelector} from 'react-redux';

// create a component
const Section = ({item}) => {
  const {topRatedMovies} = useSelector(state => state.movies);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <FlatList data={topRatedMovies} />
    </View>
  );
};
// define your styles
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  title: {
    color: ThemeColors.WHITE,
    fontSize: 18,
    fontWeight: '500',
  },
});

//make this component available to the app
export default Section;
