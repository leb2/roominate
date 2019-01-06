import React from 'react';
import {
  Text,
  View,
  TouchableNativeFeedback,
  StyleSheet
} from 'react-native';
import { sharedStyles } from '../../constants/SharedStyles';
import ElevatedView from 'react-native-elevated-view';
import Header from "../../components/Header";

export default class CreateRoomScreen extends React.Component {
  constructor() {
    super();
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={[sharedStyles.screen, styles.screen]}>
        <Header name={'create room'} isStack={true} navigation={this.props.navigation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
  }
});
