//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ThemeColors} from '../../theme/themeColors';

// create a component
const Section = ({item}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{item.title}</Text>
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
    fontSize: 18,
    fontWeight: '500',
  },
});

//make this component available to the app
export default Section;
