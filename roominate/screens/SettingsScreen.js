import React from 'react';
import { View } from 'react-native';
import Header from "../components/Header";
import { sharedStyles } from '../constants/SharedStyles';

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'Settings',
  };

  render() {
    return (
      <View style={sharedStyles.screen}>
        <Header name="settings" leftIconName={'md-list'} leftHandler={() => this.props.navigation.openDrawer()}/>
      </View>
    )
  }
}
