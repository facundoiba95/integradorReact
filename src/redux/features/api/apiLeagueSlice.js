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
            const idLeague = localStorage.getItem('idLeague');
            const connect = await fetch(`/api/sports/v1/classifications/current/?site=8&type=10&tournament=0${idLeague}`);
            const res = [await connect.json()];
            return res[0].data[0];
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
            state.content = [action.payload]
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