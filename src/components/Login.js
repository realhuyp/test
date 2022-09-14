import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, Keyboard, Image, TouchableWithoutFeedback, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native';
import { useForm, Controller } from "react-hook-form";
import Icon from "react-native-vector-icons/Ionicons";
const { width: WIDTH } = Dimensions.get('window')
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export default function Login({ login }) {

    const schema = yup.object({
        email: yup.string().email().required("It need to be an email (abc@email.com)"),
        password: yup
    .string()
    .min(8, "Password need to be greater than 8 "),
    })

    const { control, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
        defaultValues: {
            email: '',
            password: ''
        }
    });
    const onSubmit = (data) => {
        login(data)
    }
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? "padding" : "height"}
            style={styles.keyboardContainer}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ImageBackground source={require('../img/bg.jpg')}
                    style={styles.ImageBackgroundContainer}>
                    <View style={styles.logoContainer}>
                        <Image source={require('../img/ktm3.png')}
                            style={styles.logo} />
                    </View>

                    <View style={styles.inputContainer}>

                        <View style={{ backgroundColor: '#00000' }}>
                            <Controller
                                control={control}
                                rules={{
                                    required: true,

                                }}
                                render={({ field: { onChange, onBlur, value } }) => (
                                    <TextInput
                                        style={styles.input}
                                        onBlur={onBlur}
                                        onChangeText={onChange}
                                        value={value}
                                    />
                                )}
                                name="email"
                            />
                            {errors.email && <Text style={styles.inputErr}>{errors.email.message}</Text>}

                        </View>
                    </View>
                    <View style={styles.inputContainer}>
                        <Controller
                            control={control}
                            rules={{
                                required: true,
                                maxLength: 20
                            }}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <TextInput
                                    style={styles.input}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    secureTextEntry={true}
                                />
                            )}
                            name="password"
                        />
                        {errors.password && <Text style={styles.inputErr}>{errors.password.message}</Text>}
                    </View>
                    <TouchableOpacity onPress={handleSubmit(onSubmit)} style={styles.btnLogin}>
                        <Text style={styles.text}>Login</Text>
                    </TouchableOpacity>
                </ImageBackground >
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    keyboardContainer: {
        flex: 1
    },
    ImageBackgroundContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    logoContainer: {
        alignItems: 'center',
        marginBottom: 50
    },
    logo: {
        width: 190,
        height: 120
    },
    inputContainer: {
        marginTop: 10,
    },
    input: {
        width: WIDTH - 55,
        height: 55,
        borderRadius: 25,
        fontSize: 17,
        paddingLeft: 45,
        backgroundColor: '#ffff',
        marginHorizontal: 25,
    },
    inputErr: {
        color: 'red',
        fontSize: 17,
        paddingLeft: 45,
        marginHorizontal: 25,
        width: WIDTH - 55,

    },
    btnEye: {
        position: 'absolute',
        top: 14,
        right: 37
    },
    btnLogin: {
        width: WIDTH - 55,
        height: 55,
        borderRadius: 25,
        backgroundColor: '#F2771A',
        justifyContent: 'center',
        marginTop: 20
    },
    text: {
        color: '#ffff',
        fontSize: 18,
        textAlign: 'center'
    }
})