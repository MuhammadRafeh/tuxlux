import React from 'react';
import { TextInput as VanillaTextInput, StyleSheet, View, Text } from 'react-native';
import colors from '../../constants/colors';

const TextInput = props => {
    const { active } = props;
    return (
        <View>
            <View style={{ ...styles.textInput, backgroundColor: colors.secondary, opacity: active ? 0.3 : 0.08, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
            <VanillaTextInput
                {...props}
                style={[styles.textInput, props.style, { opacity: active ? 1 : 0.08, borderWidth: active ? 1 : 0, borderColor: colors.secondary }]}
                placeholderTextColor={'white'}
                selectionColor={'white'}
            />
            <View style={styles.label}>
                <Text style={{ color: 'white', top: -1 }}>
                    {props.label}
                </Text>
            </View>
        </View>
    );
}

export default TextInput;

const styles = StyleSheet.create({
    textInput: {
        color: 'white',
        borderRadius: 6,
        fontSize: 16,
        padding: 10,
        paddingHorizontal: 30
    },
    label: {
        paddingHorizontal: 8,
        position: 'absolute',
        backgroundColor: '#39424B',
        borderRadius: 3,
        top: -9,
        left: 10,
        opacity: 1
    }
});
