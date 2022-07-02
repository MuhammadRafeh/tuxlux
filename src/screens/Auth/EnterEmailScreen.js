import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import colors from '../../constants/colors';
import EnterEmail from '../../../assets/images/enteremail/index.svg'
import TextInput from '../../components/UI/TextInput';
import Button from '../../components/UI/Button';
const { height } = Dimensions.get('window');
import Ionicons from '@expo/vector-icons/Ionicons';
const EnterEmailScreen = props => {
    const emailRef = useRef(null);
    useEffect(() => {
        emailRef.current.focus();
    }, [])
    const [email, setEmail] = useState('');
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
                    <EnterEmail height={height / 2.5} />
                </View>
                <View style={{ width: '86%', alignSelf: 'center', marginTop: 25 }}>
                    <View>
                        <TextInput
                            ref={emailRef}
                            onChangeText={setEmail}
                            value={email}
                            placeholder={'Email'}
                            label={'Email'}
                            active={whichFocus == 0 ? true : false}
                            onFocus={setFocus.bind(null, 0)}
                            onBlur={onBlur}
                        />
                    </View>
                    <View style={{ marginTop: 40, alignSelf: 'center' }}>
                        <Button applyBack title={'Get Code'} onPress={() => props.navigation.navigate('EnterCode')} />
                    </View>
                </View>
                <View style={{ width: '100%', height: 50, paddingLeft: 10, position: 'absolute', top: 10, alignItems: 'flex-start' }}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}>
                        <Ionicons name="md-chevron-back-sharp" size={32} color="white" />
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}

export default EnterEmailScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: colors.primary
    }
})