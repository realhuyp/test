import React from 'react'
import { View, Text, StyleSheet, TextInput, Dimensions, TouchableOpacity, Keyboard, Image, TouchableWithoutFeedback, ImageBackground, KeyboardAvoidingView, Platform } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'

import { logout } from '../redux/auth';


export default function Home() {
  const dispatch = useDispatch();



  return (
    <ImageBackground source={require('../img/logout.jpg')}
      style={styles.ImageBackgroundContainer} >
      <View style={styles.btnview}>
        <View style={{ flex: 1 }}></View>
        <TouchableOpacity
          style={styles.providerButton}
          onPress={() => dispatch(logout())}
        >
          <Text >Log out</Text>
        </TouchableOpacity>
      </View>

    </ImageBackground>
  )
}


const styles = StyleSheet.create({
  ImageBackgroundContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnview: {
    justifyContent: 'space-evenly',
    flex: 1,
    padding: 20,
  },
  providerButton: {
    borderTopColor: '#ffff',
    borderStyle: 'solid',
    padding: 14,
    paddingHorizontal: 20,
    backgroundColor: '#ffff',
    alignItems: "center",
    borderRadius: 15,
    marginBottom: 30
  },
})

