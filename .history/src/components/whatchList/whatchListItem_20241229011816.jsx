//import liraries
import {EmojiHappy} from 'iconsax-react-native';
import React, {Component} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {ThemeColors} from '../../theme/themeColors';
import {getRandomColor} from '../../utils/function';
import {width} from '../../utils/constants';
import {useNavigation} from '@react-navigation/native';
import {ADDNEWLIST} from '../../utils/routes';

// create a component
const WhatchListItem = ({item, index}) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() => navigation.navigate(ADDNEWLIST)}
      style={styles.container}>
      <View
        style={{
          width: width / 2 - 50,
          height: width / 2 - 50,
          backgroundColor: getRandomColor(index),
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 8,
        }}>
        <EmojiHappy size="90" color={ThemeColors.WHITE} />
      </View>
      <Text style={styles.title}>{item.title}</Text>
    </Pressable>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: '45%',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
  },
  title: {
    color: ThemeColors.WHITE,
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
  },
});

//make this component available to the app
export default WhatchListItem;
