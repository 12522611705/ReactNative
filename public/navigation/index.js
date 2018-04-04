/**
 * React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict'
import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, TouchableOpacity, Alert, Image } from 'react-native';
// import { publicCSS } from './css/publicCSS';
// import { TEXT } from './utils/publicTEXT';

export default class Index extends Component<{}> {
    constructor(props){
    	super(props)
    	this.state={
    		text:"hello! react-native"
    	}
    }
    componentWillMount(){
        
    }
    render() {
        const _this = this;
        const state = _this.state;
        return (
            <View>
                <Text onPress={()=>{
                	console.log(111)
                }}>{state.text}</Text>
            </View>
        );
    }
}
