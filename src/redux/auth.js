import axios from "axios";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: null,

};

const auth = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess(state, action) {
            state.token = action.payload.token
        },
        logout(state, action) {
            state.token = null
            localStorage.removeItem('Userdata')
        }

    }
});


export const { loginSuccess, logout } = auth.actions;

export const login = ({ email, password }) => async dispatch => {
    const res = await axios
        .post('https://codersx-swagger.glitch.me/api/auth/login', {
            email, password
        }).then(function (res) {
            localStorage.setItem('Userdata', JSON.stringify(res.data))
            dispatch(loginSuccess(res.data))
            console.log(dispatch(loginSuccess(res.data)))
        }).catch(function (error) {
            console.log('Bao Loi', error)
        })

}




export default auth.reducer