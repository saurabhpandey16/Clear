import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
  Modal,
  TextInput,
  Image,
  Dimensions,
} from 'react-native';
import {TouchableOpacity, ScrollView} from 'react-native-gesture-handler';
import Item from '../components/Item';
import Icon from 'react-native-vector-icons/Ionicons';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ReadMore from 'react-native-read-more-text';
const DATA = [
  {
    taskName: 23,
    value: 'Video',
    image: require('../assets/orange.png'),
    pending: ':15',
    sub: 'Video Shoutout',
    backgroundColor: '#000000',
  },
  {
    taskName: 56,
    value: 'Video',
    image: require('../assets/blue.png'),
    pending: ':15',
    sub: 'Video Call',
    backgroundColor: '#000000',
  },
  {
    taskName: 11,
    value: 'Video',
    image: require('../assets/black.png'),
    pending: ':15',
    sub: 'Conferencing',
    backgroundColor: '#000000',
  },
  {
    taskName: 110,
    value: 'Video',
    image: require('../assets/yellow.png'),
    pending: ':15',
    sub: 'Review',
    backgroundColor: '#000000',
  },
  {
    taskName: 11,
    value: 'Video',
    image: require('../assets/red.png'),
    pending: ':15',
    sub: 'Comment',
    backgroundColor: '#000000',
  },
  {
    taskName: 56,
    value: 'Video',
    image: require('../assets/grey.png'),
    pending: ':15',
    sub: 'Messaging',
    backgroundColor: '#000000',
  },
];
const DATA1 = [
  {
    userimage: require('../assets/avatar.gif'),
    name: 'Satish Chandra',
    hour: '1 hour ago',
    Like: '1',
    comment: '2',
    view: 'Views (10)',
    image1: require('../assets/car.png'),
    readmoretext:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
  {
    userimage: require('../assets/avatar.gif'),
    name: 'Vijay Kumar',
    hour: '6 hour ago',
    Like: '11',
    comment: '5',
    view: 'Views (11)',
    image1: require('../assets/dance.png'),
    readmoretext:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
  },
];

// const Item = ({item}) => {
//   return (
//     <View key={item.id} style={styles.item}>
//       <Text style={styles.title}>{item.taskName}</Text>
//       <Text style={styles.date}>DUE: {item.date}</Text>
//       <TouchableOpacity>
//         <Text style={styles.assigned}>{item.assigned}</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

const FirstPage = () => {
  const renderItem = ({item}) => <Item item={item} />;
  const [value, onChangeText] = useState('');
  const [date, onChangeDate] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <FlatList
          style={styles.flat}
          data={DATA}
          renderItem={renderItem}
          numColumns={2}
          keyExtractor={item => item.id}
        />
        <View style={styles.searchSection}>
          <Image
            source={require('../assets/boy.png')}
            style={{
              resizeMode: 'contain',
              borderRadius: 50,
              backgroundColor: 'pink',
              height: 50,
              width: 50,
              margin: 5,
              padding: 5,
            }}
          />
          <TextInput
            style={{
              padding: 10,
              height: 40,
              borderColor: '#f5f5f5',
              fontWeight: 'bold',
              borderWidth: 1,
              marginBottom: 5,
              fontSize: 20,
            }}
            onChangeText={text => onChangeText(text)}
            value={value}
            placeholder={'Create a new post'}
          />
        </View>
        <View style={{height: 0.5, backgroundColor: '#BDBDBD'}}></View>
        <View>
          <View style={styles.cam}>
            <Icon
              style={[
                styles.cam,
                {
                  color: '#424242',
                  paddingBottom: 10,
                },
              ]}
              name="camera-outline"
              size={30}
            />

            <Icon
              style={[
                styles.cam,
                {
                  color: '#424242',
                },
              ]}
              name="ios-videocam-outline"
              size={30}
            />

            <Icon
              style={[
                styles.cam,
                {
                  color: '#424242',
                },
              ]}
              name="ios-headset-outline"
              size={30}
            />

            <Icon
              style={[
                styles.cam,
                {
                  color: '#424242',
                },
              ]}
              name="ios-document-text-outline"
              size={30}
            />

            <MaterialCommunityIcons
              style={[
                styles.cam,
                {
                  color: '#424242',
                },
              ]}
              name="microsoft-excel"
              size={33}
            />
          </View>
          <View>
            <FlatList
              data={DATA1}
              renderItem={({item, index}) => (
                <View
                  key={index}
                  style={{
                    alignSelf: 'center',
                    marginLeft: 50,
                    marginRight: 50,
                    margin: 20,
                    borderWidth: 1,
                    borderColor: '#BDBDBD',
                  }}>
                  <View style={{flexDirection: 'row'}}>
                    <Image
                      source={item.userimage}
                      style={{
                        resizeMode: 'cover',
                        borderRadius: 50,

                        height: 50,
                        width: 50,
                        margin: 5,
                      }}
                    />
                    <View style={{flexDirection: 'column'}}>
                      <Text
                        style={{
                          fontWeight: '500',
                          fontSize: 25,
                          color: '#6495ed',
                          marginLeft: 10,
                          marginBottom: 2,
                          marginTop: 5,
                        }}>
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          fontWeight: '500',
                          fontSize: 18,
                          color: '#BDBDBD',
                          marginLeft: 11,
                          marginBottom: 5,
                        }}>
                        {item.hour}
                      </Text>
                    </View>
                  </View>

                  <View>
                    <Image
                      source={item.image1}
                      style={{
                        resizeMode: 'stretch',
                        height: 100,
                        width: Dimensions.get('window').width - 38,
                      }}
                    />
                    <View style={{margin: 10}}>
                      <ReadMore numberOfLines={3}>
                        <Text
                          style={{
                            color: '#424242',
                            fontSize: 15,
                          }}>
                          {item.readmoretext}
                        </Text>
                      </ReadMore>
                    </View>

                    <View
                      style={{
                        height: 0.5,
                        backgroundColor: 'grey',

                        marginRight: 25,
                        marginLeft: 25,
                        marginTop: 10,
                      }}></View>
                    <View style={{flexDirection: 'row'}}>
                      <Icon
                        style={{
                          marginLeft: 5,
                          color: 'red',
                          paddingTop: 5,
                        }}
                        name="heart"
                        size={30}
                      />
                      <Text
                        style={{
                          color: 'red',
                          marginLeft: 5,
                          fontSize: 20,
                          paddingTop: 10,
                          fontWeight: '500',
                        }}>
                        {item.Like}
                      </Text>

                      <MaterialCommunityIcons
                        style={{
                          marginLeft: 20,
                          paddingTop: 8,
                          color: '#BDBDBD',
                        }}
                        name="comment"
                        size={30}
                      />
                      <Text
                        style={{
                          color: '#BDBDBD',
                          fontWeight: '700',
                          marginLeft: 5,
                          fontSize: 20,
                          paddingTop: 10,
                        }}>
                        {item.comment}
                      </Text>

                      <Icon
                        style={[
                          {
                            paddingTop: 5,
                            textAlign: 'right',
                            marginRight: 5,
                            flex: 1,
                            color: '#BDBDBD',
                          },
                        ]}
                        name="eye"
                        size={30}
                      />
                      <Text
                        style={{
                          color: '#BDBDBD',
                          fontWeight: '700',
                          marginRight: 7,

                          fontSize: 18,
                          paddingTop: 10,
                        }}>
                        {item.view}
                      </Text>
                    </View>
                  </View>
                </View>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  bigcard: {
    backgroundColor: 'red',
    width: '100%',
  },
  cam: {
    backgroundColor: '#f5f5f5',
    paddingTop: 10,

    alignItems: 'flex-start',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },

  flat: {},
  TouchableOpacityStyle: {
    backgroundColor: 'red',
    width: 50,
    height: 50,
    alignItems: 'center',
    borderRadius: 30,
    justifyContent: 'center',
    alignSelf: 'flex-end',
    margin: 20,
  },
  searchSection: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  searchIcon: {
    padding: 10,
  },
  FloatingButtonStyle: {
    textAlign: 'center',
  },
});

export default FirstPage;
