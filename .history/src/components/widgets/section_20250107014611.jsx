//import liraries
import React, {Component, useMemo} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {ThemeColors} from '../../theme/themeColors';
import {useSelector} from 'react-redux';
import MovieItem from '../movies/movieItem';

// create a component
const Section = ({item}) => {
  const {topRatedMovies, popularMovies} = useSelector(state => state.movies);

  const setData = useMemo(() => {
    switch (parseInt(item.id, 10)) {
      case 1:
        return topRatedMovies;
      case 2:
        return popularMovies;
      default:
        return topRatedMovies;
    }
  }, [item.id, topRatedMovies, popularMovies]);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
      <FlatList
        horizontal
        data={setData()}
        renderItem={({item}) => <MovieItem item={item} />}
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
    fontSize: 20,
    fontWeight: '500',
    marginVertical: 10,
    marginBottom: 20,
  },
});

//make this component available to the app
export default Section;
