import React, { useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Constants from 'expo-constants';
import colors from '../../constants/colors';
import EnterEmail from '../../../assets/images/enteremail/index.svg'
import TextInput from '../../components/UI/TextInput';
import Button from '../../components/UI/Button';
const { width, height } = Dimensions.get('window');

const EnterEmailScreen = props => {
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
                    <EnterEmail height={height / 2.5} />
                </View>
                <View style={{ width: '86%', alignSelf: 'center', marginTop: 25 }}>
                    <View>
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
                    <View style={{ marginTop: 40, alignSelf: 'center' }}>
                        <Button applyBack title={'Get Code'} onPress={() => { }} />
                    </View>
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