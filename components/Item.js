import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Modal,
  TouchableHighlight,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {ImageBackground} from 'react-native';
const Item = ({item}) => {
  return (
    <ImageBackground source={item.image} style={styles.item} key={item.id}>
      <View style={styles.pending}>
        <Text
          style={{
            backgroundColor: item.backgroundColor,
            fontSize: 15,
            alignSelf: 'center',
            paddingLeft: 2,
            paddingHorizontal: 2,
            color: 'white',
            fontWeight: '700',
            opacity: 0.4,
            width: 85,
          }}>
          Pending{item.pending}
        </Text>
      </View>
      <Text
        style={{
          alignItems: 'flex-start',
          fontWeight: 'bold',
          color: 'white',
          fontSize: 20,

          lineHeight: 30,
        }}>
        {item.taskName}
      </Text>
      <Text
        style={{
          flex: 1,
          alignItems: 'flex-start',
          fontWeight: 'bold',
          color: 'white',
          fontSize: 15,
          lineHeight: 30,
        }}>
        {item.sub}
      </Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 10,
    marginVertical: 20,
    marginHorizontal: 20,
    width: 170,
    height: 100,
  },
  pending: {
    height: 20,
    borderRadius: 5,
    width: 80,
    alignSelf: 'flex-end',
  },
  title: {
    fontSize: 18,
    marginVertical: 5,
  },

  assigned: {
    fontSize: 16,
    textAlign: 'right',
    marginLeft: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,
  elevation: 5,
});

export default Item;
