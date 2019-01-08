import {observable} from "mobx";

export class User {
  @observable name = '';
  @observable description = '';
}

export class UserStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable users = []
}

