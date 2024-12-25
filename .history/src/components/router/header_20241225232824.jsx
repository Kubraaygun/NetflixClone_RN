//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ThemeColors} from '../../theme/themeColors';

// create a component
const Header = () => {
  return (
    <View style={styles.container}>
      <Text>MyComponent</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: 400,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: ThemeColors.BLACK,
  },
});

//make this component available to the app
export default Header;
