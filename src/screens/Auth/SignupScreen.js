import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import colors from '../../constants/colors';
import SignupSVG from '../../../assets/images/signup/index.svg'
import TextInput from '../../components/UI/TextInput';
import Button from '../../components/UI/Button';
const SignupScreen = props => {
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
                        <TextInput placeholder={'First Name'} label={'First Name'} />
                    </View>
                    <View style={{ marginBottom: 20 }}>
                        <TextInput placeholder={'Last Name'} label={'Last Name'} />
                    </View>
                    <View style={{ marginBottom: 20 }}>
                        <TextInput placeholder={'Enter Email'} label={'Email'} />
                    </View>
                    <View style={{ marginBottom: 20 }}>
                        <TextInput placeholder={'Password'} label={'Password'} />
                    </View>
                    <View style={{ marginBottom: 20 }}>
                        <TextInput placeholder={'Password'} label={'Confirm'} />
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