import { useState } from 'react';
import {
	Keyboard,
	KeyboardAvoidingView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function RegistrationScreen() {
	const [activeInputName, setActiveInputName] = useState(null);
	const [showPwd, setShowPwd] = useState(true);

	handleInputFocus = name => {
		setActiveInputName(name);
	};

	const handleShowPwd = () => {
		setShowPwd(!showPwd);
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<KeyboardAvoidingView
				keyboardVerticalOffset={-140}
				behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
			>
				<View style={styles.bgElements}>
					<View style={styles.avatarHolder}>
						<TouchableOpacity style={styles.addAvatarBg}>
							<AntDesign name="pluscircleo" size={24} color="#ff6c00" />
						</TouchableOpacity>
					</View>

					<Text style={styles.title}>Registration</Text>

					<View style={styles.formWrapper}>
						<TextInput
							style={[
								styles.input,
								{
									borderColor: `${
										activeInputName === 'login' ? '#ff6c00' : '#e8e8e8'
									}`,
								},
							]}
							placeholder="Login"
							placeholderTextColor="#bdbdbd"
							onFocus={() => handleInputFocus('login')}
							onBlur={() => handleInputFocus(null)}
						/>
						<TextInput
							style={[
								styles.input,
								{
									borderColor: `${
										activeInputName === 'email' ? '#ff6c00' : '#e8e8e8'
									}`,
								},
							]}
							placeholder="Email Address"
							placeholderTextColor="#bdbdbd"
							onFocus={() => handleInputFocus('email')}
							onBlur={() => handleInputFocus(null)}
						/>
						<TextInput
							style={[
								styles.input,
								styles.pwd,
								{
									borderColor: `${
										activeInputName === 'pwd' ? '#ff6c00' : '#e8e8e8'
									}`,
								},
							]}
							placeholder="Password"
							placeholderTextColor="#bdbdbd"
							onFocus={() => handleInputFocus('pwd')}
							onBlur={() => handleInputFocus(null)}
							secureTextEntry={showPwd}
						/>
						<TouchableOpacity onPress={handleShowPwd} style={styles.pwdShow}>
							<Text style={styles.linkText}>{showPwd ? 'Show' : 'Hide'}</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.btn}>
							<Text style={styles.btnText}>Sign Up</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.linkLogin}>
							<Text style={styles.linkText}>
								Already have an account? Sign in
							</Text>
						</TouchableOpacity>
					</View>
				</View>
			</KeyboardAvoidingView>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
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
		// fontWeight: 500,
		letterSpacing: 0.3,
	},

	formWrapper: {
		width: '100%',
		paddingHorizontal: 16,
		alignItems: 'center',
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
