import { createSlice } from "@reduxjs/toolkit";

let id = 0;
export const todo = createSlice({
    name: 'todos',
    initialState: {
        todos_list: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.todos_list = [...state.todos_list, {
                id: ++id,
                title: action.payload.title,
                description: action.payload.description,
                selected: action.payload.selected
            }]
        },
        deleteTodo: (state, action) => {
            state.todos_list = [...state.todos_list.filter(todo => todo.id != action.payload)];
        },
        editTodo: (state = initialState, action) => {
            let { todos_list } = state;
            const { title, description, index } = action.payload;
            todos_list[index].title = title;
            todos_list[index].description = description
            state.todos_list = todos_list

        },
        setTodo : (state,action) => {
            state.todos_list = [...action.payload]
        },
        deleteSelectTodo : (state, action) => {
            state.todos_list = [...state.todos_list.filter(todo => !todo.selected)];
        },
    },
});

export const { addTodo, deleteTodo, editTodo, setTodo,deleteSelectTodo } = todo.actions
export const selectTodos = state => state.todos_list;

export default todo.reducer