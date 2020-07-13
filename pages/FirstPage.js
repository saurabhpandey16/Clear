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
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Item from '../components/Item';
import Icon from 'react-native-vector-icons/Ionicons';
import DatePicker from 'react-native-datepicker';

const DATA = [
  {
    id: 1,
    taskName: 'GST Filling flow',
    date: '27-08-2020',
    assigned: 'James',
  },
  {
    id: 2,
    taskName: 'ITR Filling Flow',
    date: '27-08-2020',
    assigned: 'Jenny',
  },
  {
    id: 3,
    taskName: 'Task 3',
    date: '27-08-2020',
    assigned: 'User',
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
  const [modalVisible, setModalVisible] = useState(false);
  const [value, onChangeText] = useState('');
  const [date, onChangeDate] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      <TouchableOpacity
        style={styles.TouchableOpacityStyle}
        activeOpacity={0.7}
        onPress={() => {
          setModalVisible(!modalVisible);
        }}>
        <Icon style={styles.FloatingButtonStyle} name="add" size={24} />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalView}>
          <TextInput
            style={{
              padding: 5,
              height: 40,
              borderColor: 'gray',
              borderWidth: 1,
            }}
            onChangeText={text => onChangeText(text)}
            value={value}
            placeholder={'Enter task name'}
          />
          <DatePicker
            style={{width: 200}}
            date={date}
            mode="date"
            placeholder="select date"
            format="YYYY-MM-DD"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                position: 'absolute',
                left: 0,
                top: 4,
                marginLeft: 0,
              },
              dateInput: {
                marginLeft: 36,
              },
              // ... You can check the source to find the other keys.
            }}
            onDateChange={date => onChangeDate(date)}
          />
        </View>
      </Modal>
    </SafeAreaView>
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
  },
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
  FloatingButtonStyle: {
    textAlign: 'center',
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
});

export default FirstPage;
