import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState= {
    content: [],
    league1:[],
    libertadores:[],
    serieA:[],
    premierLeague:[],
    championsLeague:[],
    laLiga:[],
    ligaArgentina: [],
    isLoading: false,
    error: null
}

export const fetchMatches = createAsyncThunk(
    'content/fetchMatches',
    async (idLeague) => {
        try {
           const dataIdLeague = JSON.stringify({idLeague});

           const connect = await fetch(`${import.meta.env.VITE_URL_BACKEND}/matches/getMatchesLeagues`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
              },
              body: dataIdLeague
           })

           const res = await connect.json();
           return res;
        } catch (error) {
            console.log(error);
        }
    }
)

export const fetchMatchesToday = createAsyncThunk(
    'content/fetchMatchesToday',
    async (idLeague) => {
        try {
            const dataIdLeague = JSON.stringify({idLeague});
            const connect = await fetch(`${import.meta.env.VITE_URL_BACKEND}/matches/getMatchesLeaguesToday`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: dataIdLeague
            })
            const res = await connect.json();
            return res;
        } catch (error) {
            console.log(error);
        }
    }
)

export const fetchMatchesArgentina = createAsyncThunk(
    'content/fetchMatchesArgentina',
    async () => {
        try {
           const connect = await fetch(`${import.meta.env.VITE_URL_BACKEND}/matches/getMatchesLeagueArgentina`,{
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            }
           })
           const res = await connect.json();
           localStorage.setItem('ligaArgentina', JSON.stringify(res))
           return res;
        } catch (error) {
            console.log(error);
        }
    }
)


export const apiMatchesSlice = createSlice({
    name: 'apiMatches',
    initialState,
    reducers: {},
    extraReducers: ( builder ) => {
        builder.addCase( fetchMatches.pending, ( state, action ) => {
            state.isLoading = true;
            return state;
        })
        builder.addCase(fetchMatches.rejected, ( state, action ) => {
            state.isLoading = false;
            state.error = action.error.message;
            return state;
        })
        builder.addCase(fetchMatches.fulfilled, ( state, action ) => {
            state.content = action.payload ;
            state.isLoading = false;
            return state;
        })


        builder.addCase( fetchMatchesToday.pending, ( state, action ) => {
            state.isLoading = true;
            return state;
        })
        builder.addCase(fetchMatchesToday.rejected, ( state, action ) => {
            state.isLoading = false;
            state.error = action.error.message;
            return state;
        })
        builder.addCase(fetchMatchesToday.fulfilled, ( state, action ) => {
            switch (action.meta.arg) {
                case 2015:
                    state.league1 = action.payload;
                    break;
                case 2019:
                    state.serieA = action.payload;
                    break;
                case 2021:
                    state.premierLeague = action.payload;
                    break;
                case 2001:
                    state.championsLeague = action.payload;
                    break;
                case 2152:
                    state.libertadores = action.payload;
                    break;
                case 2014:
                    state.laLiga = action.payload;
                    break;
                default:
                    break;
            }
            state.content =  action.payload;
            state.isLoading = false;
            return state;
        })

        builder.addCase(fetchMatchesArgentina.pending, ( state, action ) => {
            state.isLoading = true;
            return state;
        })
        builder.addCase(fetchMatchesArgentina.rejected, ( state, action ) => {
            state.error = action.error.message;
            state.isLoading = false;
            return state;
        })
        builder.addCase(fetchMatchesArgentina.fulfilled, ( state, action ) => {
            state.isLoading = false;
            state.ligaArgentina = action.payload;
            return state;
        })
    }
})

export default apiMatchesSlice.reducer;