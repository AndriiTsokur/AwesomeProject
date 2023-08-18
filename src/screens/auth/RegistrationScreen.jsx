import {
	Alert,
	ImageBackground,
	Keyboard,
	KeyboardAvoidingView,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import authStyles from '../../utils/styles/authStyles';

import imgBg from '../../assets/images/background.jpg';
import { useEffect, useState } from 'react';

export default function RegistrationScreen() {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View style={authStyles.container}>
				<ImageBackground
					source={imgBg}
					style={authStyles.container}
					imageStyle={authStyles.bgScreen}
				>
					<KeyboardAvoidingView
						keyboardVerticalOffset={-140}
						behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
					>
						<View style={authStyles.bgElements}>
							<View style={authStyles.avatarHolder}>
								<TouchableOpacity style={authStyles.addAvatarBg}>
									<AntDesign name="pluscircleo" size={24} color="#FF6C00" />
								</TouchableOpacity>
							</View>

							<Text style={authStyles.title}>Registration</Text>

							<View style={authStyles.formWrapper}>
								<TextInput
									style={authStyles.input}
									placeholder="Login"
									placeholderTextColor={'#bdbdbd'}
									// onFocus={setInputName('login')}
									// onBlur={setInputName('')}
								/>
								<TextInput
									style={authStyles.input}
									name="email"
									placeholder="Email Address"
								/>
								<TextInput
									style={[authStyles.input, authStyles.pwd]}
									name="pwd"
									placeholder="Password"
									secureTextEntry
								/>
								<TouchableOpacity style={authStyles.pwdShow}>
									<Text style={authStyles.linkText}>Show</Text>
								</TouchableOpacity>

								<TouchableOpacity style={authStyles.btn}>
									<Text style={authStyles.btnText}>Sign Up</Text>
								</TouchableOpacity>

								<TouchableOpacity style={authStyles.linkLogin}>
									<Text style={authStyles.linkText}>
										Already have an account? Sign in
									</Text>
								</TouchableOpacity>
							</View>
						</View>
					</KeyboardAvoidingView>
				</ImageBackground>
			</View>
		</TouchableWithoutFeedback>
	);
}
