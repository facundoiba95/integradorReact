import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useParams } from "react-router-dom";

const initialState = {
    content:[],
    league1:[],
    serieA:[],
    premierLeague:[],
    libertadores:[],
    championsLeague:[],
    ligaArgentina:[],
    laLiga:[],
    isLoading:false,
    error: null
};

export const fetchApiLeagues = createAsyncThunk(
    'content/fetchContent',
    async (idLeague) => {
        try {
            const getIdLocalStorage = idLeague ? idLeague : localStorage.getItem('idLeague') 
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
            switch (action.meta.arg){
                case 106:
                    state.premierLeague = action.payload
                    localStorage.setItem('premierLeagueRanking',JSON.stringify(state.premierLeague))
                    break;
                case 165:
                    state.libertadores = action.payload;
                    localStorage.setItem('libertadoresRanking',JSON.stringify(state.libertadores))
                    break;
                case 103:
                    state.championsLeague = action.payload;
                    localStorage.setItem('championsLeagueRanking',JSON.stringify(state.championsLeague))
                    break;
                case 107:
                    state.serieA = action.payload;
                    localStorage.setItem('serieARanking',JSON.stringify(state.serieA))
                    break;
                case 109: 
                    localStorage.setItem('league1Ranking',JSON.stringify(state.league1))
                    state.league1 = action.payload;
                    break;
                case 122:
                    state.laLiga = action.payload;
                    localStorage.setItem('laLigaRanking',JSON.stringify(state.laLiga))
                    break;
                case 152:
                    state.ligaArgentina = action.payload;
                    localStorage.setItem('ligaArgentinaRanking',JSON.stringify(state.ligaArgentina))
                    break;
                default:
                    state.content = action.payload;
                    break;
            }
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

        builder
    }
})

export default apiLeagueSlice.reducer;