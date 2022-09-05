import React from "react";

import Login from "../containers/Login";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
const _stackAuthNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{ headerShown: false }} >
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
};
const AuthNavigator = () => {
    return _stackAuthNavigator();
};

export default AuthNavigator;
