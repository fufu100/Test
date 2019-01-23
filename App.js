/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Provider} from 'mobx-react/native';
import MainScreen from './MainScreen';
import {initStore} from './store';

type Props = {};
export default class App extends Component<Props> {
	render() {
		return (
			<Provider store={initStore()}>
				<MainScreen />
			</Provider>
		);
	}
}
