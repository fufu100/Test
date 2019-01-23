import AppStore from './AppStore';

let _AppStore;

export function initStore() {
	if (_AppStore == null) {
		_AppStore = new AppStore();
	}
	return _AppStore;
}
