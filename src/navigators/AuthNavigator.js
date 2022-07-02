import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OnBoardingScreen from '../screens/OnBoardingScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import SignupScreen from '../screens/Auth/SignupScreen';
import EnterEmailScreen from '../screens/Auth/EnterEmailScreen';
import EnterCodeScreen from '../screens/Auth/EnterCodeScreen';
import EnterNewPasswordScreen from '../screens/Auth/EnterNewPasswordScreen';

const Stack = createStackNavigator();

function AuthNavigator() {
    return (
        <Stack.Navigator
            initialRouteName={'OnBoarding'}
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="OnBoarding" component={OnBoardingScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Signup" component={SignupScreen} />
            <Stack.Screen name="EnterEmail" component={EnterEmailScreen} />
            <Stack.Screen name="EnterCode" component={EnterCodeScreen} />
            <Stack.Screen name="EnterNewPassword" component={EnterNewPasswordScreen} />
        </Stack.Navigator>
    );
}

export default AuthNavigator;
