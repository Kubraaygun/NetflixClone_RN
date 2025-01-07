//import liraries
import React from 'react';
import {View, Image, Pressable, StyleSheet} from 'react-native';
import {IMAGE_BASE_URL} from '../../service/url';
import {height, width} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';
import {MOVIEDETAIL} from '../../utils/routes';

// create a component
const MovieItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(MOVIEDETAIL, {movieId: item.id})}
      style={styles.container}>
      <Image
        source={{uri: IMAGE_BASE_URL + item?.poster_path}}
        style={{
          width: width * 0.3,
          height: height * 0.2,
          borderRadius: 5,
          resizeMode: 'cover',
        }}
      />
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
  },
});

//make this component available to the app
export default MovieItem;
