import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    content:[],
    isLoading:false,
    error: null
};

export const fetchApiLeagues = createAsyncThunk(
    'content/fetchContent',
    async () => {
        try {
            const getIdLocalStorage = localStorage.getItem('idLeague')
            const dataIdLeague= JSON.stringify({ idLeague: getIdLocalStorage });

            const connect = await fetch(`${import.meta.env.VITE_URL_BACKEND}leagues/getLeaguesByID`,{
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                mode:'cors',
                body: dataIdLeague
            });
            const res = await connect.json();
            return res.resApi.data;
        } catch (error) {
            console.log(error);
            return;
        }
    }

)

export const apiLeagueSlice = createSlice({
    name:'apiLeagues',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchApiLeagues.fulfilled, ( state, action ) => {
            state.content = action.payload
            state.isLoading = false
            return state;
        })
        builder.addCase(fetchApiLeagues.pending, ( state, action ) => {
            state.isLoading = true;
            return state;
        })
        builder.addCase(fetchApiLeagues.rejected, ( state, action ) => {
            state.isLoading = false;
            state.error = action.error.message
            return state;
        })

    }
})

export default apiLeagueSlice.reducer;