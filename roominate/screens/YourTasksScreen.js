import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View,
} from 'react-native';
import { sharedStyles } from '../constants/SharedStyles';
import Header from "../components/Header";
import TaskList from "../components/TaskList";
import stores from '../stores/RootStore';

export default class YourTasksScreen extends React.Component {
  constructor() {
    super();
  }

  static navigationOptions = {
    header: null,
    title: 'Your Tasks'
  };

  render() {
    return (
      <View style={sharedStyles.screen}>
        <Header name="room tasks"
                leftIconName={'md-list'} leftHandler={() => this.props.navigation.openDrawer()}
                rightIconName={'md-add'} rightHandler={() => this.props.navigation.navigate('AddTask')}
        />
        <ScrollView style={[sharedStyles.container, sharedStyles.scrollView]}>
          <TaskList name={'chores'} tasks={stores.taskStore.tasks} navigation={this.props.navigation}/>
          <TaskList name={'groceries'} tasks={stores.taskStore.tasks} navigation={this.props.navigation}/>
        </ScrollView>
      </View>
    );
  }
}

