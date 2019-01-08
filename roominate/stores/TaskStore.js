import {observable} from "mobx";

export class Task {
  @observable name = '';
  @observable description = '';

  constructor(name, description='') {
    this.name = name;
    this.description = description;
  }
}

export class TaskStore {
  @observable tasks = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this._populateTasks();
  }

  _populateTasks() {
    this.addTask(new Task('Task 1'));
    this.addTask(new Task('Task 2'));
    this.addTask(new Task('Task 3'));
  }

  addTask(task) {
    this.tasks.push(task)
  }
}


