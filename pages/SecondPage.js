import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Item from '../components/Item';

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

const SecondPage = () => {
  const renderItem = ({item}) => <Item item={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
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
});

export default SecondPage;
