//import liraries
import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useDispatch, useSelector} from 'react-redux';
import {
  getCategories,
  getTopRatedMovies,
} from '../../store/action/movieActions';
import CategoryItem from '../../components/widgets/categoryItem';
import Categories from '../../widgets/categories';
import Sections from '../../widgets/section';

// create a component
const Home = () => {
  const {topRatedMovies, categories} = useSelector(state => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
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
