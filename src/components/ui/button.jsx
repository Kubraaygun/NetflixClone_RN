//import liraries
import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ThemeColors} from '../../theme/themeColors';
ThemeColors;

// create a component
const Button = props => {
  const {title, status} = props;
  const setColor = () => {
    switch (status) {
      case 'primary':
        return ThemeColors.RED;
      case 'warning':
        return ThemeColors.WHITE;
      case 'info':
        return ThemeColors.WHITE;
      case 'danger':

      default:
        return ThemeColors.RED;
    }
  };
  return (
    <TouchableOpacity
      {...props}
      style={[styles.container, {backgroundColor: setColor()}]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    paddingVertical: 15,
    borderRadius: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    color: ThemeColors.WHITE,
  },
});

//make this component available to the app
export default Button;
