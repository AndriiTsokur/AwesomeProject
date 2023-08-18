import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import {
	RegistrationScreen,
	LoginScreen,
	PostsScreen,
} from './src/screens/auth';

export default function App() {
	const [fontsLoaded] = useFonts({
		'Roboto-Regular': require('./src/assets/fonts/Roboto/Roboto-Regular.ttf'),
		'Roboto-Medium': require('./src/assets/fonts/Roboto/Roboto-Medium.ttf'),
		'Roboto-Bold': require('./src/assets/fonts/Roboto/Roboto-Bold.ttf'),
	});

	if (!fontsLoaded) return null;

	return (
		// <NavigationContainer>
		<RegistrationScreen />
		// </NavigationContainer>

		// <View style={styles.container}>
		// 	<Text>Open up App.js to start working on your app!</Text>
		// 	<Text style={styles.text}>Andrii TSOKUR Test Launch</Text>
		// 	<StatusBar style="auto" />
		// </View>
	);
}

const style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},

	text: {
		fontFamily: 'Roboto-Bold',
		fontSize: 24,
	},
});
