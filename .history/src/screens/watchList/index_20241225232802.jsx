//import liraries
import React, {Component} from 'react';
import {View, SafeAreaView, StyleSheet} from 'react-native';
import {Text} from 'react-native-svg';

// create a component
const WatchList = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text>WatchList</Text>
      </View>
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default WatchList;
