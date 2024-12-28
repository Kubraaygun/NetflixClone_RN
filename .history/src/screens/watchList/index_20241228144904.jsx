//import liraries
import React, {Component} from 'react';
import {View, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {Text} from 'react-native-svg';
import {defaultScreenStyle} from '../../styles/defaultScreenStyle';
import {useSelector} from 'react-redux';
import WhatchListItem from '../../components/whatchList/whatchListItem';

// create a component
const WatchList = () => {
  const {whatchList} = useSelector(state => state.watchList);
  return (
    <View style={defaultScreenStyle.container}>
      <FlatList
        data={WatchList}
        renderItem={({item}) => <WhatchListItem item={item} />}
      />
    </View>
  );
};

//make this component available to the app
export default WatchList;
