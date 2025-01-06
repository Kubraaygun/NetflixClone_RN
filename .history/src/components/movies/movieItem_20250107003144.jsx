//import liraries
import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {IMAGE_BASE_URL} from '../../service/url';

// create a component
const MovieItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: IMAGE_BASE_URL + item?.backdrop_path}}
        style={{
          width: 100,
          height: 100,
        }}
      />
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
