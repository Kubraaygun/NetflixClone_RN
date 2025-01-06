//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ThemeColors} from '../../theme/themeColors';

// create a component
const CategoryItem = ({item}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    margin: 10,
  },
  name: {
    color: ThemeColors.WHITE,
    fontSize: 22,
    fontWeight: '500',
  },
});

//make this component available to the app
export default CategoryItem;
