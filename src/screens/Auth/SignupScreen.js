import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import colors from '../../constants/colors';
import SignupSVG from '../../../assets/images/signup/index.svg'
import TextInput from '../../components/UI/TextInput';
import Button from '../../components/UI/Button';
const SignupScreen = props => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [passward, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');


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
                    <SignupSVG />
                </View>
                <View>
                    <Text style={{ color: 'white', textAlign: 'center', marginBottom: 2, fontSize: 35 }}>
                        Create New
                    </Text>
                </View>
                <View>
                    <Text style={{ color: 'white', textAlign: 'center', fontSize: 25, marginBottom: 25 }}>
                        Account
                    </Text>
                </View>
                <View style={{ width: '86%', alignSelf: 'center' }}>
                    <View style={{ marginBottom: 20 }}>
                        <TextInput
                            onChangeText={setFirstName}
                            value={firstName}
                            placeholder={'First Name'}
                            label={'First Name'}
                            active={whichFocus == 0 ? true : false}
                            onFocus={setFocus.bind(null, 0)}
                            onBlur={onBlur}
                        />
                    </View>
                    <View style={{ marginBottom: 20 }}>
                        <TextInput
                            onChangeText={setLastName}
                            value={lastName}
                            placeholder={'Last Name'}
                            label={'Last Name'}
                            active={whichFocus == 1 ? true : false}
                            onFocus={setFocus.bind(null, 1)}
                            onBlur={onBlur}
                        />
                    </View>
                    <View style={{ marginBottom: 20 }}>
                        <TextInput
                            onChangeText={setEmail}
                            value={email}
                            placeholder={'Enter Email'}
                            label={'Email'}
                            active={whichFocus == 2 ? true : false}
                            onFocus={setFocus.bind(null, 2)}
                            onBlur={onBlur} s
                        />
                    </View>
                    <View style={{ marginBottom: 20 }}>
                        <TextInput
                            onChangeText={setPassword}
                            value={passward}
                            placeholder={'Password'}
                            label={'Password'}
                            active={whichFocus == 3 ? true : false}
                            onFocus={setFocus.bind(null, 3)}
                            onBlur={onBlur}
                        />
                    </View>
                    <View style={{ marginBottom: 20 }}>
                        <TextInput
                            onChangeText={setConfirm}
                            value={confirm}
                            placeholder={'Password'}
                            label={'Confirm'}
                            active={whichFocus == 4 ? true : false}
                            onFocus={setFocus.bind(null, 4)}
                            onBlur={onBlur}
                        />
                    </View>

                    <View style={{ marginTop: 10, alignSelf: 'center' }}>
                        <Button title={'Sign Up'} onPress={() => { }} />
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15 }}>
                        <TouchableOpacity onPress={() => props.navigation.goBack()}>
                            <Text style={{ textAlign: 'center', color: colors.secondary, fontSize: 19 }}>Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default SignupScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: colors.primary
    }
})