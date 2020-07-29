import 'react-native-gesture-handler';

import * as React from 'react';
import {Button, View, Text, TouchableOpacity, Image} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './pages/HomeScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Monu"
      screenOptions={{
        headerTintColor: 'Black',
        headerTitleStyle: {fontWeight: 'bold'},
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        color={'black'}
        options={{title: 'Activity'}}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Feed"
        tabBarOptions={{
          activeTintColor: '#42f44b',
        }}>
        <Tab.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="compass" color={color} size={30} />
            ),
          }}
        />
        <Tab.Screen
          name="Camera"
          component={HomeStack}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <Icons name="search" color={color} size={30} />
            ),
          }}
        />

        <Tab.Screen
          name="email"
          component={HomeStack}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name="email" color={color} size={30} />
            ),
          }}
        />

        <Tab.Screen
          name="SearchStack"
          component={HomeStack}
          options={{
            tabBarLabel: '',
            tabBarIcon: ({color, size}) => (
              <Icons name="user" color={color} size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;
