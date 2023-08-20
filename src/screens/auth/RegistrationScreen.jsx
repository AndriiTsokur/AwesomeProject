import {
	Keyboard,
	KeyboardAvoidingView,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import COLORS from '../../utils/colors';
import authStyles from '../../utils/styles/authStyles';

import { useState } from 'react';

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
			{/* <View style={authStyles.container}> */}
			<KeyboardAvoidingView
				keyboardVerticalOffset={-140}
				behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
			>
				<View style={authStyles.bgElements}>
					<View style={authStyles.avatarHolder}>
						<TouchableOpacity style={authStyles.addAvatarBg}>
							<AntDesign name="pluscircleo" size={24} color="#ff6c00" />
						</TouchableOpacity>
					</View>

					<Text style={authStyles.title}>Registration</Text>

					<View style={authStyles.formWrapper}>
						<TextInput
							style={[
								authStyles.input,
								{
									borderColor: `${
										activeInputName === 'login'
											? COLORS.inputBorder.active
											: COLORS.inputBorder.blured
									}`,
								},
							]}
							placeholder="Login"
							placeholderTextColor={'#bdbdbd'}
							onFocus={() => handleInputFocus('login')}
							onBlur={() => handleInputFocus(null)}
						/>
						<TextInput
							style={[
								authStyles.input,
								{
									borderColor: `${
										activeInputName === 'email'
											? COLORS.inputBorder.active
											: COLORS.inputBorder.blured
									}`,
								},
							]}
							placeholder="Email Address"
							placeholderTextColor={'#bdbdbd'}
							onFocus={() => handleInputFocus('email')}
							onBlur={() => handleInputFocus(null)}
						/>
						<TextInput
							style={[
								authStyles.input,
								authStyles.pwd,
								{
									borderColor: `${
										activeInputName === 'pwd'
											? COLORS.inputBorder.active
											: COLORS.inputBorder.blured
									}`,
								},
							]}
							placeholder="Password"
							placeholderTextColor={'#bdbdbd'}
							onFocus={() => handleInputFocus('pwd')}
							onBlur={() => handleInputFocus(null)}
							secureTextEntry={showPwd}
						/>
						<TouchableOpacity
							onPress={handleShowPwd}
							style={authStyles.pwdShow}
						>
							<Text style={authStyles.linkText}>
								{showPwd ? 'Show' : 'Hide'}
							</Text>
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
			{/* </View> */}
		</TouchableWithoutFeedback>
	);
}
