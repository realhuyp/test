import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import Home from "../components/Home";
import ToDo from "../components/ToDo";
import Detail from "../components/Detail";



const Stack = createStackNavigator();

const _stackHomeNavigator = () => {
    return (
        <Stack.Navigator
            initialRouteName="Home"
        // screenOptions={{ headerShown: false }}
        >
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="ToDo" component={ToDo} />
            <Stack.Screen name="Detail" component={Detail} />

        </Stack.Navigator>
    );
};
const HomeNavigator = () => {
    return _stackHomeNavigator();
};

export default HomeNavigator;
