import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, Keyboard, Image, TouchableWithoutFeedback, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native';

import Icon from "react-native-vector-icons/Ionicons";
const { width: WIDTH } = Dimensions.get('window')

export default function Login({ login }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    
    function handleSubmit(e) {
        e.preventDefault()
        
        login({ email, password })
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? "padding" : "height"}
            style={styles.keyboardContainer}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ImageBackground source={require('../img/ktm.jpg')}
                    style={styles.ImageBackgroundContainer}>
                    <View style={styles.logoContainer}>
                        <Image source={require('../img/ktm3.png')}
                            style={styles.logo} />
                    </View>

                    <View style={styles.inputContainer}>
                        <View style={{ backgroundColor: '#00000' }}>
                            <TextInput
                                style={styles.input}
                                placeholderTextColor={'#91809c'}
                                underlineColorAndroid='trans'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder={'Email'} />
                            <Icon name={'ios-person-outline'} size={28}
                                color={'#000000'}
                                style={styles.inputIcon}
                            />
                        </View>
                    </View>

                    <View style={styles.inputContainer}>

                        <TextInput
                            style={styles.input}
                            placeholderTextColor={'#91809c'}
                            underlineColorAndroid='trans'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder={'Password'}
                            secureTextEntry={true} />
                        <Icon name={'ios-lock-open-outline'} size={28}
                            color={'#000000'}
                            style={styles.inputIcon}
                        />
                    </View>
                    <TouchableOpacity onPress={handleSubmit} style={styles.btnLogin}>
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
    inputIcon: {
        position: 'absolute',
        top: 9,
        left: 37
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