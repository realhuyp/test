import React from "react";
import Home from "../components/Home";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();
const _stackHomeNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
    );
};
const HomeNavigator = () => {
    return _stackHomeNavigator();
};

export default HomeNavigator;
