import {observable, action} from 'mobx';

export default class MainStore {
	@observable
	value: Object = {
		a: 0
	};

	@action
	setValue(o: Object) {
		for (let k in o) {
			this.value[k] = o[k];
		}
	}
}
