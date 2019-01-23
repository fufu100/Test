import MainStore from './MainStore';

export default class AppStore {
	mainStore: MainStore;
	constructor() {
		this.mainStore = new MainStore();
	}
}
