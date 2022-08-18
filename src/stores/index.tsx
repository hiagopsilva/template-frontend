import { RouterStore } from 'mobx-react-router';

import { create } from 'mobx-persist';

import UserStore from './user.store';

class RootStore {
  user: UserStore;

  constructor() {
    this.user = new UserStore();
  }
}

const store = new RootStore();

const hydrate = create({
  storage: localStorage,
});

hydrate('film', store.user);

export { RouterStore, UserStore };
export default store;
