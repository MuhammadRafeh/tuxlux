import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Logo from '../'
import Constants from 'expo-constants';
import colors from '../constants/colors';

const OnBoardingScreen = props => {
    useEffect(() => {
        setTimeout(() => props.navigation.replace('Login'), 2);
    }, [])
    return (
        <View style={styles.screen}>
            <Logo />
        </View>
    );
}

export default OnBoardingScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.primary,
        marginTop: Constants.statusBarHeight
    }
})