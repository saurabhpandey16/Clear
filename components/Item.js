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
import Icon from 'react-native-vector-icons/FontAwesome';
const Item = ({item}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [name, setUser] = useState('');
  const userArr = [
    {name: 'James'},
    {name: 'Jenny'},
    {name: 'Jordam'},
    {name: 'John'},
  ];
  return (
    <View key={item.id} style={styles.item}>
      <Text style={styles.title}>{item.taskName}</Text>
      <Text style={styles.date}>DUE: {item.date}</Text>
      <TouchableOpacity
        onPress={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={{flexDirection: 'row', alignSelf: 'flex-end'}}>
          <Icon name="user-circle" size={24} />
          <Text style={styles.assigned}>{item.assigned}</Text>
        </View>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {}}>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Select user</Text>

          <FlatList
            data={userArr}
            ItemSeparatorComponent={() => {
              return (
                <View
                  style={{
                    margin: 5,
                    height: 0.5,
                    backgroundColor: '#000',
                    width: '100%',
                  }}></View>
              );
            }}
            renderItem={({item}) => {
              return (
                <TouchableOpacity
                  onPress={item => {
                    setUser({name: item.name});
                  }}>
                  <View style={{flex: 1, backgroundColor: '100%'}}>
                    <Text>{item.name}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />

          {/* <Text style={styles.modalText}>Hello World!</Text>

          <TouchableHighlight
            style={{...styles.openButton, backgroundColor: '#2196F3'}}
            onPress={() => {
              setModalVisible(!modalVisible);
            }}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </TouchableHighlight> */}
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 18,
    marginVertical: 5,
  },
  date: {
    fontSize: 16,
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
  modalView: {
    margin: 20,
    marginTop: 100,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Item;
