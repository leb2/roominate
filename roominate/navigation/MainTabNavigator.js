import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createDrawerNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';

import YourTasksScreen from '../screens/YourTasksScreen';
import RoomTasksScreen from '../screens/RoomTasksScreen';

import SettingsScreen from '../screens/SettingsScreen';
import TaskScreen from "../screens/TaskScreen";

const YourTasksStack = createStackNavigator({
  Home: YourTasksScreen,
  Task: TaskScreen
});

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
  // LinksStack,
  // SettingsStack,
});
