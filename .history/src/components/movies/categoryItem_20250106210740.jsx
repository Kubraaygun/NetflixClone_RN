//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ThemeColors} from '../../theme/themeColors';

// create a component
const CategoryItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{item.name}</Text>
    </View>
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
