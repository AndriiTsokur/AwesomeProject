import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
	RegistrationScreen,
	LoginScreen,
	PostsScreen,
} from './src/screens/auth';
import imgBg from './src/assets/images/background.jpg';

export default function App() {
	const [fontsLoaded] = useFonts({
		'Roboto-Regular': require('./src/assets/fonts/Roboto/Roboto-Regular.ttf'),
		'Roboto-Medium': require('./src/assets/fonts/Roboto/Roboto-Medium.ttf'),
		'Roboto-Bold': require('./src/assets/fonts/Roboto/Roboto-Bold.ttf'),
	});

	if (!fontsLoaded) return null;

	return (
		<ImageBackground
			source={imgBg}
			style={styles.container}
			imageStyle={styles.bgScreen}
		>
			<NavigationContainer>
				<RegistrationScreen />
			</NavigationContainer>
		</ImageBackground>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'flex-end',
	},

	bgScreen: {
		resizeMode: 'cover',
	},
});
