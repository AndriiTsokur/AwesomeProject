import { StyleSheet } from 'react-native';

const authStyles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
	},

	bgScreen: {
		resizeMode: 'cover',
	},

	bgElements: {
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingBottom: 16,

		backgroundColor: '#ffffff',
		borderTopLeftRadius: 25,
		borderTopRightRadius: 25,
	},

	avatarHolder: {
		position: 'relative',
		top: -60,
		width: 120,
		height: 120,

		backgroundColor: '#f6f6f6',
		borderRadius: 16,
	},

	addAvatarBg: {
		position: 'absolute',
		bottom: 12,
		right: -12,
		width: 24,
		height: 24,

		backgroundColor: '#ffffff',
		borderRadius: 12,
	},

	title: {
		top: -28,
		marginBottom: 5,

		color: '#212121',
		fontFamily: 'Roboto-Medium',
		fontSize: 30,
		fontWeight: 500,
		letterSpacing: 0.3,
	},

	formWrapper: {
		width: '100%',
		paddingHorizontal: 16,
		alignItems: 'center',

		// backgroundColor: 'lightblue',
	},

	input: {
		width: '100%',
		height: 50,
		marginBottom: 16,
		padding: 16,

		backgroundColor: '#f6f6f6',
		borderColor: '#e8e8e8',
		borderWidth: 1,
		borderRadius: 8,

		color: '#212121',
		fontFamily: 'Roboto-Regular',
		fontSize: 16,
	},

	pwd: {
		marginBottom: 43,
	},

	pwdShow: {
		position: 'absolute',
		bottom: 142,
		right: 32,
	},

	linkText: {
		color: '#1b4371',
		fontFamily: 'Roboto-Regular',
		fontSize: 16,
	},

	btn: {
		width: '100%',
		height: 50,
		marginBottom: 16,
		paddingVertical: 16,
		paddingHorizontal: 32,

		backgroundColor: '#ff6c00',
		borderRadius: 100,
	},

	btnText: {
		color: '#ffffff',
		fontFamily: 'Roboto-Regular',
		fontSize: 16,
		textAlign: 'center',
	},
});

export default authStyles;
