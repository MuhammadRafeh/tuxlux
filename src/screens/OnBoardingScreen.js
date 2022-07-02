import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import colors from '../constants/constants';
import Logo from "../../assets/images/UI/logo.svg";

const OnBoardingScreen = () => {
    useEffect(() => {
        setTimeout(() => props.navigation.replace('Auth'), 2);
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
        backgroundColor: colors.secondary
    }
})