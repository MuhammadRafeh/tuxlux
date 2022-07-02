import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import colors from '../../constants/colors';
import LoginSVG from '../../../assets/images/login/index.svg'
import TextInput from '../../components/UI/TextInput';
import Button from '../../components/UI/Button';
const LoginScreen = props => {
    return (
        <View style={styles.screen}>
            <ScrollView>
                <View style={{ alignSelf: 'center' }}>
                    <LoginSVG />
                </View>
                <View>
                    <Text style={{ color: 'white', textAlign: 'center', marginBottom: 2, fontSize: 35 }}>
                        Welcome Back!
                    </Text>
                </View>
                <View>
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 25, marginBottom: 25 }}>
                        Login To Continue
                    </Text>
                </View>
                <View style={{ width: '86%', alignSelf: 'center' }}>
                    <View style={{ marginBottom: 25, }}>
                        <TextInput placeholder={'Email'} label={'Email'} />
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <TextInput placeholder={'Password'} label={'Password'} />
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <TouchableOpacity>
                            <Text style={{ color: 'white', opacity: 0.5 }}>Forget Password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 60, alignSelf: 'center' }}>
                        <Button title={'Login'} onPress={() => { }} />
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 30 }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
                            <Text style={{ textAlign: 'center', color: colors.secondary, fontSize: 19 }}>Create Account</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
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