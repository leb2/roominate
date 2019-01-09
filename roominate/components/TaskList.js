import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import TaskListItem from "./TaskListItem";
import {observer} from "../node_modules/mobx-react/custom";
import {Observer} from "mobx-react";

@observer
export default class TaskList extends React.Component {
  constructor(props) {
    super();
    this.props = props;
  }

  gotoTaskScreen(task) {
    this.props.navigation.navigate('Task', {task: task})
  }

  render() {
    let tasks = this.props.tasks.slice();
    let name = this.props.name;

    return (
      <View>
        <Text style={styles.sectionHeader}>{name.toUpperCase()}</Text>
        <FlatList data={tasks}
                  renderItem={(item) => <TaskListItem task={item.item} clicked={(task) => this.gotoTaskScreen(task)}/>}
                  keyExtractor={(item) => item.name}
        />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  sectionHeader: {
    marginTop: 12,
    padding: 10,
    fontSize: 14,
    fontWeight: '800',
    color: '#666',
    fontFamily: 'montserrat'
  },
});
