import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import colors from '../../constants/colors';
import LoginSVG from '../../../assets/images/login/index.svg'
import TextInput from '../../components/UI/TextInput';
const LoginScreen = props => {
    return (
        <View style={styles.screen}>
            <View style={{ alignSelf: 'center' }}>
                <LoginSVG />
            </View>
            <View>
                <Text style={{ color: 'white', textAlign: 'center', marginBottom: 2, fontSize: 35 }}>
                    Welcome Back!
                </Text>
            </View>
            <View>
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 25 }}>
                    Login To Continue
                </Text>
            </View>

            <View>
                <TextInput placeholder={'Email'} label={'Email'} />
            </View>
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: colors.primary
    }
})