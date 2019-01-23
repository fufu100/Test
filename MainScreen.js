/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Button, Text, View} from 'react-native';
import {inject, observer} from 'mobx-react/native';
import {computed} from 'mobx';

@inject('store')
@observer
export default class MainScreen extends Component<*> {
	@computed
	get val() {
		const {mainStore} = this.props.store;
		return mainStore.value;
	}
	addA = () => {
		const {a} = this.val;
		const {mainStore} = this.props.store;
		mainStore.setValue({a: a + 1});
	};
	addB = () => {
		const {b} = this.val;
		const {mainStore} = this.props.store;
		console.log('addB', b);
		mainStore.setValue({b: b !== undefined ? b + 1 : 0});
	};
	render() {
		const {a, b} = this.val;
		console.log('render', this.val);
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Welcome to React Native!</Text>
				<Text style={styles.instructions}>To get started, edit App.js</Text>
				<Button title={'button a'} onPress={this.addA} />
				<Button title={'button b'} onPress={this.addB} />
				<Text style={styles.instructions}>{a}</Text>
				<Text style={styles.instructions}>{b}</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF'
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5
	}
});
