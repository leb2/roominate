import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import { sharedStyles } from '../../constants/SharedStyles';
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
    this.props.navigation.navigate('Main')
  }

  render() {
    return (
      <View style={[sharedStyles.screen, styles.screen]}>
        <Header name={'create room'} isStack={true} navigation={this.props.navigation}/>
        <View style={sharedStyles.scrollView}>
          <ThemedTextInput onChangeText={(roomName) => this.setState({roomName})}
                           text={'Room name (optional):'}
                           placeholder={'Room'}/>
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
