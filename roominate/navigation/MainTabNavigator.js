import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import YourTasksScreen from '../screens/YourTasksScreen';
import RoomTasksScreen from '../screens/RoomTasksScreen';

import TaskScreen from "../screens/TaskScreen";
import AddTaskScreen from "../screens/AddTaskScreen";
import SettingsScreen from "../screens/SettingsScreen";

const YourTasksStack = createStackNavigator({
  Home: YourTasksScreen,
  Task: TaskScreen,
  AddTask: AddTaskScreen,
});

// TODO: change options for drawer
YourTasksStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
      }
    />
  ),
};

export default createDrawerNavigator({
  YourTasksStack,
  RoomTasksScreen,
  SettingsScreen,
});
