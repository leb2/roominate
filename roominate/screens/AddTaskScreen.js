import React from 'react';
import {
  View,
} from 'react-native';
import { sharedStyles } from '../constants/SharedStyles';
import Header from "../components/Header";
import ThemedTextInput from "../components/ThemedTextInput";
import ThemedButton from "../components/ThemedButton";
import stores from '../stores/RootStore';
import {Task} from "../stores/TaskStore";

export default class TaskScreen extends React.Component {
  constructor(props) {
    super();
    this.props = props;

    this.currTaskName = ''
  }

  static navigationOptions = {
    header: null,
  };

  createTask() {
    const task = new Task(this.currTaskName);
    stores.taskStore.addTask(task);
    this.props.navigation.goBack();
  }

  render() {
    return (
      <View style={sharedStyles.screen}>
        <Header name={"New Task"} leftIconName={'md-arrow-back'}
                leftHandler={() => this.props.navigation.goBack()}/>
        <View style={sharedStyles.scrollView}>
          <ThemedTextInput text={"Task Name"} onChangeText={(text) => this.currTaskName = text}/>
          <View style={[sharedStyles.buttonBar]}>
            <ThemedButton text={'Create'} onPress={() => this.createTask()}/>
          </View>
        </View>
      </View>
    );
  }
}
