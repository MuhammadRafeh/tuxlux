import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const LoginScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>asd</Text>
        </View>
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingTop: Constants.statusBarHeight
    }
})