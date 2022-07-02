import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function AuthNavigator() {
    return (
        <Stack.Navigator initialRouteName={'OnBoarding'}>
            <Stack.Screen name="OnBoarding" component={Home} />
            <Stack.Screen name="Login" component={Notifications} />
            <Stack.Screen name="Signup" component={Profile} />
            <Stack.Screen name="EnterEmail" component={Settings} />
            <Stack.Screen name="EnterCode" component={Settings} />
            <Stack.Screen name="EnterNewPassword" component={Settings} />
        </Stack.Navigator>
    );
}

export default AuthNavigator;