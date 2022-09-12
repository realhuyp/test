import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Modal, Dimensions, TouchableWithoutFeedback, FlatList, TouchableOpacity, TextInput, Button, KeyboardAvoidingView, Platform } from 'react-native'
import { addTodo, deleteTodo, editTodo, selectTodos, setTodo } from "../redux/todo";
import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';


const WIDTH = Dimensions.get('window').width
const HEIGHT_MODAL = 150



const Detail = ({ route }) => {
    const data = useSelector(state => state.todos)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [isRefesh, setRefesh] = useState(false)
    const dispatch = useDispatch();

    useEffect(() => {
        setRefesh(false)
        setTitle('')
        setDescription('')
        console.log('run')
    }, [isRefesh])


    const closeModal = (bool, abc) => {
        if (abc == 'Cancel') {
            console.log('false')
            changeModalVisible(bool);
            setRefesh(true)
        }
        else {
            console.log('true')
            changeModalVisible(bool);
            setData(abc);
            handleEdittodo();

        }

    }


    const [isModalVisible, setisModalVisible] = useState(false)
    const [chooseData, setchooseData] = useState()

    const changeModalVisible = (bool) => {
        setisModalVisible(bool)
    }
    const setData = (abc) => {

        setchooseData(abc);
    }

    const handleEdittodo = () => {
        const { index } = route.params;
        dispatch(editTodo({ title, description, index }))

    }

    const { item } = route.params
    return (

        <View style={styles.container} >
            <View style={styles.tasksWrapper}>
                <Text style={styles.sectionTitle}>
                    Detail's tasks
                </Text>
                <View style={styles.inputContainer}>
                    <View style={{ backgroundColor: '#00000' }}>
                        <TextInput
                            style={styles.input}
                            placeholderTextColor={'#91809c'}
                            underlineColorAndroid='trans'
                            placeholder={item.title}
                            value={title}
                            onChange={(e) => setTitle(e.target.value)} />
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholderTextColor={'#91809c'}
                        underlineColorAndroid='trans'
                        placeholder={item.description}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </View>
                <TouchableOpacity
                    onPress={() => changeModalVisible(true)}
                    // onPress={handleEdittodo}
                    style={styles.btnLogin}>
                    <Text style={styles.text2}>Change</Text>
                </TouchableOpacity>
                <Modal transparent={true}
                    animationType='fade'
                    visible={isModalVisible}
                    onRequestClose={() => changeModalVisible(false)}
                >
                    <TouchableOpacity disabled={true}
                        style={styles.container2}
                    >
                        <View style={styles.modal}>
                            <View style={styles.textView}>
                                <Text
                                    style={[styles.text, { fontSize: 20 }]}
                                >
                                    Sample modal header
                                </Text>
                                <Text
                                    style={styles.text}  >
                                    Description
                                </Text>
                            </View>
                            <View style={styles.buttonView}>
                                <TouchableOpacity
                                    style={styles.touchableOpacity}
                                    onPress={() => closeModal(false, 'Cancel')}
                                >
                                    <Text style={[styles.text, { color: 'blue' }]}>Cancel</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.touchableOpacity}
                                    onPress={() => closeModal(false, 'Save')}
                                >
                                    <Text style={[styles.text]}>Save</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Modal>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    container2: {
        flex: 1, justifyContent: 'center',
        alignItems: 'center'
    },
    tasksWrapper: {
        paddingTop: 30,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    inputContainer: {
        marginTop: 10,
    },
    input: {
        height: 55,
        borderRadius: 25,
        fontSize: 17,
        paddingLeft: 45,
        paddingRight: 45,
        backgroundColor: '#ffff',
        marginHorizontal: 25,
    },
    btnLogin: {
        height: 55,
        borderRadius: 25,
        backgroundColor: '#F2771A',
        justifyContent: 'center',
        marginTop: 20
    },
    text2: {
        color: '#ffff',
        fontSize: 18,
        textAlign: 'center'
    },
    modal: {
        height: HEIGHT_MODAL,
        width: WIDTH - 80,
        paddingTop: 10,
        backgroundColor: 'white',
        borderRadius: 10
    },
    textView: {
        flex: 1,
        alignItems: 'center'
    },
    text: {
        margin: 5,
        fontSize: 16,
        fontWeight: 'bold'
    },
    buttonView: {
        width: '100%',
        flexDirection: 'row'
    },
    touchableOpacity: {
        flex: 1,
        paddingVertical: 10,
        alignItems: 'center'
    }
})
const mapStateToProps = state => {
    console.log(state.todos.todos_list)
    return {
        todos_list: state.todos.todos_list,
    }
}
const mapDispatchToProps = {

    addTodo,
    deleteTodo,
    editTodo,
    setTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
