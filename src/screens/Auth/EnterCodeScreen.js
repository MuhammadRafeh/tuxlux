import React, { useEffect, useRef, useState } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, TextInput, Text, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';
import colors from '../../constants/colors';
import EnterCode from '../../../assets/images/entercode/index.svg'
import Button from '../../components/UI/Button';
const { height } = Dimensions.get('window');

const EnterCodeScreen = props => {
    const codeRef = useRef(null);
    useEffect(() => {
        codeRef.current.focus();
    }, [])
    const [code, setCode] = useState('');
    const [select, setSelect] = useState({ start: 0, end: 0 });
    const arrayOfFour = new Array(4).fill(0)
    const components = arrayOfFour.map((_, index) => {
        if (index <= code.length - 1) {
            return (
                <Text style={styles.number}>{code[index]}</Text>
            )
        } else {
            return <View style={{ width: 16, height: 16, borderRadius: 8, backgroundColor: 'white', marginRight: 20 }} />
        }
    })
    return (
        <View style={styles.screen}>
            <ScrollView
                contentContainerStyle={{ paddingBottom: 10 }}
                keyboardShouldPersistTaps={'handled'}
            >
                <View style={{ alignSelf: 'center', marginTop: 15 }}>
                    <EnterCode height={height / 3} />
                </View>
                <View style={{ width: '86%', alignSelf: 'center', marginTop: 25 }}>
                    <View style={{ marginTop: 40, height: 50 }}>
                        <View style={{ position: 'absolute', paddingLeft: 15, height: 50, alignSelf: 'center', top: '10%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                            {components}
                        </View>
                        <TextInput
                            selectionColor={'black'}
                            placeholderTextColor={'black'}
                            ref={codeRef}
                            style={{ textAlign: 'center', flex: 1, opacity: 0 }}
                            selection={select}
                            value={code}
                            onChangeText={(text) => {
                                if (text.length > 4) return
                                setCode(text)
                            }}
                            onKeyPress={({ nativeEvent: { key: keyValue } }) => {
                                if (keyValue == 'Backspace' && select.start != 0) {
                                    setSelect({
                                        start: select.start - 1,
                                        end: select.start - 1
                                    })
                                } else if (select.start != 4) {
                                    setSelect({
                                        start: select.start + 1,
                                        end: select.start + 1
                                    })
                                }
                            }}
                        />
                    </View>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 4 }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Signup')}>
                            <Text style={{ textAlign: 'center', color: 'white', fontSize: 13 }}>Send Me New Code</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: 34, alignSelf: 'center' }}>
                        <Button applyBack title={'Set New Password'} onPress={() => props.navigation.navigate('EnterCode')} />
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}

export default EnterCodeScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: colors.primary
    },
    number: {
        color: 'white',
        fontSize: 40,
        marginRight: 18
    }
})