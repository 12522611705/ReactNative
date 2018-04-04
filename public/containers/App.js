/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict'
import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

import { TabNavigator } from 'react-navigation';
// https://blog.csdn.net/hero118023/article/details/77097887
// https://www.cnblogs.com/CrazyWL/p/7283600.html

import Index from '../navigation/index';

class HomeScreen extends Component<{}> {
	static navigationOptions = {
	    title: '首页',
	};
    render() {
    	const { navigate } = this.props.navigation;
        return (
            <View>
            	<Button
		        	title="跳转页面=>（用户）"
		        	onPress={() => navigate('User', { name: 'Jane' }) }/>
            </View>
        );
    }
}

class UserScreen extends Component<{}> {
	static navigationOptions = {
	    title: '用户',
	};
    render() {
    	const { navigate } = this.props.navigation;
        return (
            <View>
            	<Button
		        	title="跳转页面=>（首页）"
		        	onPress={() => navigate('Home', { name: 'Jane' }) }/>
            </View>
        );
    }
}

const SimpleApp = TabNavigator({
  	Home: { screen: HomeScreen },
  	User: { screen: UserScreen }
});

export default SimpleApp;