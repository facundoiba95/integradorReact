import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: [],
    isLogged: false,
    isLoading: false,
    error: null
}

export const createUser = createAsyncThunk(
    'users/createUser',
    async (form) => {
        try {
            const sendForm = await fetch(`${import.meta.env.VITE_URL_BACKEND}users/createUser`,{
                method: "POST",
                body: new FormData(form)
            })
           const res = await sendForm.json();
           return res; 
    } catch (error) {
            console.log('Error en apiAuthSlice.js createuser AsyncThunk. Error: ', error);
        }
    }
)

export const loginUser = createAsyncThunk(
    'users/loginUser',
    async (user) => {
        try {
           const sendLogin = await fetch(`${import.meta.env.VITE_URL_BACKEND}users/login`,{
               method:"POST",
               headers:{
                 "Content-Type": "application/json"
               },
               body: JSON.stringify(user)
             })
             const res = await sendLogin.json();
             return res;
        } catch (error) {
            console.log('Error en apiAuthSlice.js loginUser AsyncThunk. Error: ', error);
        }
    }
)

export const apiAuthSlice = createSlice({
    name:'apiAuth',
    initialState,
    reducers:{
        logout: ( state,action ) => {
            state.isLogged = false;
            state.isLoading = false;
            localStorage.removeItem('token')
            return;
        }
    },
    extraReducers: (builder) => {
       builder.addCase(createUser.pending, ( state,action ) => {
          state.isLoading = true;
       })
       builder.addCase(createUser.rejected, ( state,action ) => {
          state.isLoading = false;
          state.error = action.error.message;
       })
       builder.addCase(createUser.fulfilled, ( state,action ) => {
          state.user = action.payload;
          state.isLoading = false;
       })

       builder.addCase(loginUser.pending, ( state,action ) => {
          state.isLoading= true;
          state.isLogged = false;
       })
       builder.addCase(loginUser.rejected, ( state,action ) => {
          state.error = action.error.message;
          state.isLogged = false;
          state.isLoading = false;
       })
       builder.addCase(loginUser.fulfilled, ( state,action ) => {
          switch (action.payload.status){
            case 200:
                state.user = action.payload;
                state.isLogged = true;
                state.isLoading = false;
                localStorage.setItem('token',action.payload.token)
                console.log('Se inicio sesión con éxito');
                break;
            case 404:
                state.isLogged = false;
                state.isLoading = false;
                state.user = action.payload
                console.log('Usuario no encontrado.');
                break;
            case 401:
                state.isLogged = false;
                state.isLoading = false;
                state.user = action.payload
                console.log('Contraseña incorrecta.');
                break;
          }
       })
    }
})

export const { logout } = apiAuthSlice.actions;

export default apiAuthSlice.reducer;