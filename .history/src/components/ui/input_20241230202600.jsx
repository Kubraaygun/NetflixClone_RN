//import liraries
import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {ThemeColors} from '../../theme/themeColors';
import {height} from '../../utils/constants';

// create a component
const Input = props => {
  const {title, error} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TextInput {...props} style={styles.input} />
      {error && (
        <Text style={{marginTop: 5, color: ThemeColors.RED}}>{error}</Text>
      )}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    margin: 10,
    backgroundColor: ThemeColors.GRAY,
    height: height * 0.1,
    borderRadius: 5,
    padding: 5,
  },
  title: {
    fontSize: 18,
    color: ThemeColors.WHITE,
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    padding: 10,
    fontSize: 25,
    borderRadius: 8,
    paddingVertical: 15,
    color: ThemeColors.WHITE,
  },
});

//make this component available to the app
export default Input;
