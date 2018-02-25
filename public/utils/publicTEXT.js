'use strict'
import { Platform } from 'react-native';
export class TEXT {
	constructor(props) {
		
	}
	static init(ios,android){
		return Platform.select({
		    ios: ios,
		    android: android
		});
	}

	static ios(text){
		return Platform.select({
		    ios: text,
		    android: ''
		});
	}

	static android(text){
		return Platform.select({
		    ios: '',
		    android: text
		});
	}
}