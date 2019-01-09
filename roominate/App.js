import React from 'react';
import { Platform, StatusBar, StyleSheet, View, AsyncStorage } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import AppNavigator from './navigation/AppNavigator';
import rootStore from './stores/RootStore';
import {observer} from "mobx-react";

let navigationPersistenceKey = null;
// navigationPersistenceKey = __DEV__ ? "NavigationStateDEV" : null;

@observer
export default class App extends React.Component {
  render() {
    if (!rootStore.viewStore.isLoadingComplete) {
      console.log("not complete yet");
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
      console.log("complete now");
      return (
        <View style={styles.container}>
          {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
          <AppNavigator
            persistenceKey={navigationPersistenceKey}
          />
        </View>
      );
    }
  }

  static async getUserId() {
    const userId = await AsyncStorage.getItem('USER_ID');
    if (userId !== null) {
      return userId;
    } else {
      const id = '_' + Math.random().toString(36).substr(2, 9);
      await AsyncStorage.setItem('USER_ID', id);
      return id;
    }
  }

  static async updateUserId() {
    rootStore.viewStore.userId = await App.getUserId();
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('./assets/images/robot-dev.png'),
        require('./assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        ...Icon.Ionicons.font,
        'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        'roboto': require('./assets/fonts/Roboto/Roboto-Regular.ttf'),
        'montserrat': require('./assets/fonts/Montserrat/Montserrat-Regular.ttf'),
        'montserrat_bold': require('./assets/fonts/Montserrat/Montserrat-Bold.ttf'),
      }),
      App.updateUserId()
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    rootStore.viewStore.isLoadingComplete = true;
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 24,
  },
});
