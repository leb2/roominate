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
import ThemedTextInput from "../../components/ThemedTextInput";
import ThemedButton from "../../components/ThemedButton";

export default class CreateRoomScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      text: 'Default text'
    };
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={[sharedStyles.screen, styles.screen]}>
        <Header name={'join room'} isStack={true} navigation={this.props.navigation}/>
        <View style={sharedStyles.scrollView}>
          <View style={[sharedStyles.textInputContainer]}>
            <ThemedTextInput onChangeText={(text) => this.setState({text})} text={'Room ID:'}/>
          </View>
          <View style={[sharedStyles.buttonBar]}>
            <ThemedButton text={'Join Room'}/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});

