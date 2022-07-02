import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import colors from '../../constants/colors';
import LoginSVG from '../../../assets/images/login/index.svg'
import TextInput from '../../components/UI/TextInput';
import Button from '../../components/UI/Button';
const LoginScreen = props => {
    const [email, setEmail] = useState('');
    const [passward, setPassword] = useState('');

    const [whichFocus, setWhichFocus] = useState(null);
    const setFocus = type => {
        setWhichFocus(type)
    }
    const onBlur = () => {
        setWhichFocus(null);
    }
    return (
        <View style={styles.screen}>
            <ScrollView contentContainerStyle={{ paddingBottom: 10 }}>
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
                        <TextInput
                            onChangeText={setEmail}
                            value={email}
                            placeholder={'Email'}
                            label={'Email'}
                            active={whichFocus == 0 ? true : false}
                            onFocus={setFocus.bind(null, 0)}
                            onBlur={onBlur}
                        />
                    </View>
                    <View style={{ marginBottom: 10 }}>
                        <TextInput
                            onChangeText={setPassword}
                            value={passward}
                            placeholder={'Password'}
                            active={whichFocus == 1 ? true : false}
                            label={'Password'}
                            onFocus={setFocus.bind(null, 1)}
                            onBlur={onBlur}
                        />
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