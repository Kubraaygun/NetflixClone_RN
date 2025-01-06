//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ThemeColors} from '../../theme/themeColors';

// create a component
const CategoryItem = ({item}) => {
  return (
    <TouchableOpacitystyle={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
    </TouchableOpacitystyle>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  name: {
    color: ThemeColors.WHITE,
  },
});

//make this component available to the app
export default CategoryItem;
