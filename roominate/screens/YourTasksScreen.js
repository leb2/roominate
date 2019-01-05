import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { sharedStyles } from '../constants/SharedStyles';
import Header from "../components/Header";
import TaskList from "../components/TaskList";

export default class YourTasksScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      'tasks': [{name: 'Task1'}, {name: 'Task2'}],
      'groceries': [{name: 'Groceries1'}, {name: 'Groceries2'}],
    }
  }

  static navigationOptions = {
    header: null,
  };

  gotoTaskScreen(task) {
    this.props.navigation.navigate('Task');
  }

  render() {
    return (
      <View style={sharedStyles.screen}>
        <Header name="your tasks"/>
        <ScrollView style={[sharedStyles.container, sharedStyles.scrollView]}>
          <TaskList name={'tasks'} tasks={this.state.tasks}/>
          <TaskList name={'groceries'} tasks={this.state.groceries}/>
        </ScrollView>
      </View>
    );
  }
}

