import { UserStore } from "./UserStore";
import { ViewStore } from "./ViewStore";
import { Task, TaskStore } from "./TaskStore";

class RootStore {
  constructor() {
    this.userStore = new UserStore(this);
    this.viewStore = new ViewStore(this);
    this.taskStore = new TaskStore(this);
  }
}

export default new RootStore();
