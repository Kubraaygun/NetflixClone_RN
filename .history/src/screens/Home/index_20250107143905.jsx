//import liraries
import React, {useEffect} from 'react';
import {View} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {
  getCategories,
  getPopularMovies,
  getTopRatedMovies,
  getUpcomingMovies,
} from '../../store/action/movieActions';
import Categories from '../../widgets/categories';
import Sections from '../../widgets/section';

// create a component
const Home = () => {
  const {topRatedMovies, categories} = useSelector(state => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
    dispatch(getTopRatedMovies());
    dispatch(getPopularMovies());
    dispatch(getUpcomingMovies());
  }, []);

  return (
    <View style={defaultScreenStyle.container}>
      <Categories />
      <Sections />
    </View>
  );
};

//make this component available to the app
export default Home;
