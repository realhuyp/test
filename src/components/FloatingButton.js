import { Text, View, StyleSheet, Animated, TouchableWithoutFeedback } from 'react-native'
import React, { Component } from 'react'
import { AntDesign, Entypo } from '@expo/vector-icons'
import { connect, useDispatch, useSelector } from 'react-redux'
import { logout } from '../redux/auth';
import ToDo from './ToDo';
class FloatingButton extends Component {

    animation = new Animated.Value(0)

    toggleMenu = () => {
        const toValue = this.open ? 0 : 1

        Animated.spring(this.animation, {
            toValue,
            friction: 5
        }).start()

        this.open = !this.open;
    };

    render() {

        const logoutStyle = {
            transform: [
                { scale: this.animation }, {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -140]
                    })
                }
            ]
        };

        const newsStyle = {
            transform: [
                { scale: this.animation }, {
                    translateY: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -80]
                    })
                }
            ]
        }

        const rotation = {
            transform: [
                {
                    rotate: this.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ["0deg", "45deg"]
                    })
                }
            ]
        }
        return (
            <View style={[styles.container, this.props.style]}>
                <TouchableWithoutFeedback onPress={() => { this.props.logout() }}>
                    <Animated.View style={[styles.button, styles.secondary, logoutStyle]}>
                        <Entypo name='log-out' size={20} color="#F02A4B" />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={() => { this.props.navigation('ToDo') }}>
                    <Animated.View style={[styles.button, styles.secondary, newsStyle]}>
                        <Entypo name='news' size={20} color="#F02A4B" />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this.toggleMenu}>
                    <Animated.View style={[styles.button, styles.menu, rotation]}>
                        <AntDesign name='plus' size={24} color="#FFF" />
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        right: 100

    },
    button: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        shadowRadius: 10,
        shadowColor: '#F02A4B',
        shadowOpacity: 0.3,
        shadowOffset: { height: 10 }
    },
    menu: {
        backgroundColor: '#F02A4B'
    },
    secondary: {
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
        backgroundColor: '#FFF'
    }
})

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
}


export default connect(null, mapDispatchToProps)(FloatingButton)

