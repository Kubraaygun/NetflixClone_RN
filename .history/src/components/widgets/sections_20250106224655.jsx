//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {ThemeColors} from '../../theme/themeColors';
import {useSelector} from 'react-redux';
import MovieItem from '../movies/movieItem';

// create a component
const Section = ({item}) => {
  const {topRatedMovies} = useSelector(state => state.movies);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <FlatList
        horizontal
        data={topRatedMovies}
        renderItem={({item}) => <Section item={item} />}
      />
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
