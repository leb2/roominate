import {observable} from "mobx";

export class ViewStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @observable userId = "";
  @observable isLoadingComplete = false;
}
