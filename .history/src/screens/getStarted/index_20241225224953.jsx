//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {ThemeColors} from '../../theme/themeColors';

// create a component
const GetStarted = () => {
  return (
    <View style={styles.container}>
      <View style={{flex: 3}}>
        <Image
          source={require('../../assets/images/image1.png')}
          style={{height: '80%', width: '100%', resizeMode: 'cover'}}
        />

        <View style={{position: 'absolute'}}>
          <Text style={{fontSize: 24, color: ThemeColors.WHITE}}>
            Unlimited entertainment, one low price.
          </Text>
        </View>
        <View style={{flex: 3}}></View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default GetStarted;
