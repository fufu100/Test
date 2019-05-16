import {observable, action, set} from 'mobx';

export default class MainStore {
	@observable value = {a: 1};

	@action
	setValue(o: Object) {
		for (let k in o) {
			set(this.value, {k: o[k]});
		}
	}

	@action
	setA(val) {
		set(this.value, {a: val});
	}

	@action
	setB(val) {
		set(this.value, {b: val});
	}
}
