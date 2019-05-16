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
import {get, has} from 'mobx';

@inject('store')
@observer
export default class MainScreen extends Component<*> {
	addA = () => {
		const {mainStore} = this.props.store;
		const {a} = mainStore.value;
		mainStore.setA(a + 1);
	};
	addB = () => {
		const {mainStore} = this.props.store;
		const {value} = mainStore;
		const b = has(value, 'b') ? get(value, 'b') : 0;
		mainStore.setB(b + 1);
	};

	render() {
		const {value} = this.props.store.mainStore;
		let filename =
			'支付功能测试点支付功能测试点支付功能测试点支付功能测试点支付功能测试点支付功能测试点.docx';
		return (
			<View style={styles.container}>
				<Text style={styles.welcome}>Welcome to React Native!</Text>
				<Text style={styles.instructions}>To get started, edit App.js</Text>
				<Button title={'button a'} onPress={this.addA} />
				<Button title={'button b'} onPress={this.addB} />
				<Text style={styles.instructions}>{get(value, 'a')}</Text>
				<Text style={styles.instructions}>{get(value, 'b')}</Text>
				<Text>{`filename.endsWith('docx')=${filename.endsWith('docx')}`}</Text>
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
