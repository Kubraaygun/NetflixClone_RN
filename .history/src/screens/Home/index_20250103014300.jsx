//import liraries
import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {TOP_RATED_MOVIE_URL} from '../../service/url';
import {getRequest} from '../../service/verbs';
import {useDispatch} from 'react-redux';
import {getTopRatedMovies} from '../../store/action/movieActions';

// create a component
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopRatedMovies());
  }, []);
  return (
    <View style={defaultScreenStyle.container}>
      <FlatList />
    </View>
  );
};

//make this component available to the app
export default Home;
