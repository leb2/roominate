import React from 'react';
import { View } from 'react-native';
import Header from "../components/Header";
import { sharedStyles } from '../constants/SharedStyles';
import ThemedButton from "../components/ThemedButton";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  leaveRoom() {
    this.props.navigation.navigate('Start');
  }

  render() {
    return (
      <View style={sharedStyles.screen}>
        <Header name="settings" leftIconName={'md-list'} leftHandler={() => this.props.navigation.openDrawer()}/>
        <ThemedButton onPress={() => this.leaveRoom()} text={"Leave Room"}/>
      </View>
    )
  }
}
