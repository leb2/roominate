import React from 'react';import {
  Text,
  View,
  TouchableNativeFeedback,
  StyleSheet,
  KeyboardAvoidingView
} from 'react-native';
import { sharedStyles } from '../../constants/SharedStyles';
import ElevatedView from 'react-native-elevated-view';
import ThemedButton from "../../components/ThemedButton";

export default class JoinOrCreateScreen extends React.Component {
  constructor() {
    super();
  }

  static navigationOptions = {
    header: null,
  };

  handleJoinRoom() {
    console.log("joining room");
    this.props.navigation.navigate('Join')
  }

  handleCreateRoom() {
    console.log("creating room");
    this.props.navigation.navigate('Create')
  }

  render() {
    return (
      <KeyboardAvoidingView style={[sharedStyles.screen, styles.screen]} behavior="padding" enabled>
        <TouchableNativeFeedback styles={sharedStyles.container} onPress={() => this.handleJoinRoom()}>
          <ElevatedView elevation={1} style={[styles.button, styles.joinRoom]}>
            <Text style={styles.text}>
              JOIN ROOM
            </Text>
          </ElevatedView>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback style={sharedStyles.container} onPress={() => this.handleCreateRoom()}>
          <ElevatedView elevation={1} style={[styles.button, styles.createRoom]}>
            <Text style={styles.text}>
              CREATE ROOM
            </Text>
          </ElevatedView>
        </TouchableNativeFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  button: {
    fontWeight: '800',
    alignItems: 'center',
    padding: 20,
    paddingTop: 30,
    paddingBottom: 30,
    width: '100%',
    maxWidth: 300,
    margin: 8,
    borderRadius: 2,
  },

  joinRoom: {
    // backgroundColor: '#e74036'
  },

  createRoom: {
    // backgroundColor: '#87e787'
  },

  text: {
    color: '#555',
    fontFamily: 'montserrat',
    fontWeight: '800'
  }
});


