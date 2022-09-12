import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, FlatList, CheckBox, TouchableOpacity, TextInput, Button, KeyboardAvoidingView, Platform } from 'react-native'
import { addTodo, deleteTodo, editTodo, setTodo, deleteSelectTodo } from "../redux/todo";
import { connect } from 'react-redux';

import { Snackbar } from 'react-native-paper'
import { useIsFocused } from '@react-navigation/core';

const Todo = ({ todos_list, addTodo, deleteTodo, editTodo, navigation, setTodo, deleteSelectTodo }) => {


    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [isValid, setIsValid] = useState(true);
    const [listTodo, setListTodo] = useState()
    const [isRefesh, setRefesh] = useState(false)

    const isFocus = useIsFocused()

    useEffect(() => {
        setListTodo(todos_list)
        setRefesh(false)
    }, [isFocus, isRefesh])

    const handleAddTodo = () => {
        if (title.length == 0) {
            setIsValid({ bool: true, boolSnack: true, message: "Please fill out title" })
            return;
        }
        if (title.length < 3) {
            setIsValid({ bool: true, boolSnack: true, message: "Title must be at least 6 characters" })
            return;
        }

        addTodo({ title, description })
        setTitle('')
        setDescription('')
        setRefesh(true)
    }

    const handleonPress = (item) => {

        const newItem = listTodo.map((item2) => {
            let obj = { ...item2 }
            if (obj?.selected == undefined) {
                obj.selected = false
            }
            if (obj.id === item.id) {
                obj.selected = !obj.selected
                return obj
            }
            else {
                return obj;
            }
        })
        console.log('selected', newItem)
        setListTodo(newItem)
        setTodo(newItem)

    }
    
    return (
        <View style={styles.container} >
            <View style={styles.tasksWrapper}>
                <View style={styles.txt}>
                    <Text style={styles.sectionTitle}>
                        Today's tasks
                    </Text>
        
                    <TouchableOpacity
                        onPress={() => deleteSelectTodo()}
                        style={styles.sectionDeletion}>
                        <Text>  Delete</Text>
                    </TouchableOpacity>
                </View>


                <FlatList
                    data={todos_list}
                    keyExtractor={item => `$key${item.id}`}
                    renderItem={({ item, index }) => {
                        return (

                            <View style={styles.item}>
                                <View style={styles.itemLeft}>
                                    <TouchableOpacity onPress={() => handleonPress(item)}>
                                        <View style={[styles.square, { backgroundColor: item.selected ? 'red' : '#e8dfed' }]} ></View>
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate('Detail', { item, index })}>
                                        <Text style={styles.itemText}>Title : {item.title}</Text>
                                        <Text style={styles.itemText2}> {item.description}</Text>
                                    </TouchableOpacity>
                                </View>
                                <TouchableOpacity onPress={() => deleteTodo(item.id)} style={styles.circular}></TouchableOpacity>

                            </View>
                        )

                    }}
                />
            </View>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.writeTasks}
            >
                <TextInput value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    style={styles.input} placeholder="Write a title" />
                <TouchableOpacity onPress={handleAddTodo}>
                    <View style={styles.addWrapper}>
                        <Text style={styles.addText}>+</Text>
                    </View>
                </TouchableOpacity>

            </KeyboardAvoidingView>

            <Snackbar
                visible={isValid.boolSnack}
                duration={2000}
                onDismiss={() => { setIsValid({ boolSnack: false }) }}>
                {isValid.message}
            </Snackbar>

        </View >
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tasksWrapper: {
        // paddingTop: 80,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    txt: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    sectionDeletion: {
        flexDirection: 'row',
        alignItems: 'center',

    },
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    square: {
        width: 24,
        height: 24,
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,

    },
    itemText: {
        maxWidth: '100%',
        fontSize: 25
    },
    itemText2: {
        fontSize: 13
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        borderRadius: 5
    },
    writeTasks: {
        position: 'absolute',
        bottom: 60,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    input: {
        paddingVertical: 15,
        paddingHorizontal: 15,
        backgroundColor: '#FFF',
        borderRadius: 60,
        borderColor: '#C0C0C0',
        borderWidth: 1,
        width: 250
    },
    addWrapper: {
        width: 60,
        height: 60,
        backgroundColor: '#FFF',
        borderRadius: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#C0C0C0',
        borderWidth: 1,
    },
    addText: {

    }
})

const mapStateToProps = state => {
    console.log(state.todos.todos_list)
    return {
        todos_list: state.todos.todos_list,
    }
}

const mapDispatchToProps = {
    // ... normally is an object full of action creators
    addTodo,
    deleteTodo,
    editTodo,
    setTodo,
    deleteSelectTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(Todo);