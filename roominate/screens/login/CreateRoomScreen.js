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
      roomName: ''
    };
  }

  static navigationOptions = {
    header: null,
  };

  createRoom() {
    console.log(this.state.roomName);
  }

  render() {
    return (
      <View style={[sharedStyles.screen, styles.screen]}>
        <Header name={'create room'} isStack={true} navigation={this.props.navigation}/>
        <View style={sharedStyles.scrollView}>
          <View style={[sharedStyles.textInputContainer]}>
            <ThemedTextInput onChangeText={(roomName) => this.setState({roomName})}
                             text={'Room name (optional):'}
                             placeholder={'Room'}/>
          </View>
          <View style={[sharedStyles.buttonBar]}>
            <ThemedButton text={'Create'} onPress={() => this.createRoom()}/>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
