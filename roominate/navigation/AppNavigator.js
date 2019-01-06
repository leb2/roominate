import React from 'react';
import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import MainTabNavigator from './MainTabNavigator';
import CreateRoomScreen from "../screens/login/CreateRoomScreen";
import JoinOrCreateScreen from "../screens/login/JoinOrCreateScreen";
import JoinRoomScreen from "../screens/login/JoinRoomScreen";


const CreateOrJoinStack = createStackNavigator({
  Home: JoinOrCreateScreen,
  Create: CreateRoomScreen,
  Join: JoinRoomScreen
});

export default createAppContainer(createSwitchNavigator({
  Start: CreateOrJoinStack,
  Main: MainTabNavigator,
}));

