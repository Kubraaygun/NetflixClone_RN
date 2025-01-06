//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ThemeColors} from '../../theme/themeColors';

// create a component
const Section = ({item}) => {
  return (
    <View style={styles.container}>
      <Text>Section</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginVertical: 10,
  },
  title: {
    color: ThemeColors.WHITE,
  },
});

//make this component available to the app
export default Section;
