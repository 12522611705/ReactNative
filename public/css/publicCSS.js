'use strict'
import { StyleSheet } from 'react-native';
export const publicCSS = StyleSheet.create({
	btn:{
		width:100,
		height:24,
		lineHeight:24,
		backgroundColor:'#f00',
		textAlign:'center',
		color:'#fff'
	},
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
