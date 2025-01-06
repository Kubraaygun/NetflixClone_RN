//import liraries
import React, {useEffect} from 'react';
import {View, Text, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import CategoryItem from '../components/movies/categoryItem';
import {getCategories} from '../store/action/movieActions';

// create a component
const Categories = () => {
  const {categories} = useSelector(state => state.movies);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <FlatList
      horizontal
      data={categories}
      renderItem={({item}) => <CategoryItem item={item} />}
    />
  );
};

//make this component available to the app
export default Categories;
