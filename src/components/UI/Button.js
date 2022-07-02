import React from 'react';
import { Text, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import colors from '../../constants/colors';
const { width } = Dimensions.get('screen');
const Button = props => {
    const { onPress, title } = props;
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText} numberOfLines={1} adjustsFontSizeToFit={true}>{title}</Text>
        </TouchableOpacity>
    );
}

export default Button;

const styles = StyleSheet.create({
    button: {
        maxWidth: width,
        width: width - 140,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderWidth: 1,
        borderColor: colors.secondary,
        borderRadius: 6
    },
    buttonText: {
        fontSize: 20,
        color: 'white'
    }
})
