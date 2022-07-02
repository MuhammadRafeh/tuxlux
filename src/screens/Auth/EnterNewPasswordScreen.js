import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import colors from '../../constants/colors';
import NewPassword from '../../../assets/images/enternewpassword/index.svg'
import Eye from '../../../assets/images/enternewpassword/eye.svg'
import TextInput from '../../components/UI/TextInput';
import Button from '../../components/UI/Button';
const { height } = Dimensions.get('window');

const EnterNewPasswordScreen = props => {
    const newPasswordRef = useRef(null);
    useEffect(() => {
        newPasswordRef.current.focus();
    }, [])
    const [password, setPassword] = useState('');
    const [visible, setVisible] = useState(true);
    const [whichFocus, setWhichFocus] = useState(null);
    const setFocus = type => {
        setWhichFocus(type)
    }
    const onBlur = () => {
        setWhichFocus(null);
    }
    return (
        <View style={styles.screen}>
            <ScrollView
                contentContainerStyle={{ paddingBottom: 10 }}
                keyboardShouldPersistTaps={'handled'}
            >
                <View style={{ alignSelf: 'center', marginTop: 15 }}>
                    <NewPassword height={height / 3} />
                </View>
                <View style={{ width: '86%', alignSelf: 'center', marginTop: 25 }}>
                    <View>
                        <TextInput
                            secureTextEntry={visible}
                            ref={newPasswordRef}
                            onChangeText={setPassword}
                            value={password}
                            placeholder={'Enter Password'}
                            label={'New Password'}
                            active={whichFocus == 0 ? true : false}
                            onFocus={setFocus.bind(null, 0)}
                            onBlur={onBlur}
                        />
                        <View style={{ position: 'absolute', top: 0, left: 0, right: 8, bottom: 0, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <TouchableOpacity onPress={() => setVisible(!visible)}>
                                <Eye />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ marginTop: 40, alignSelf: 'center' }}>
                        <Button applyBack title={'Confirm'} onPress={() => alert('New Password Set!')} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default EnterNewPasswordScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: colors.primary
    }
})