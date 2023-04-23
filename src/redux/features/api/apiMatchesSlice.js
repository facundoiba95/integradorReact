import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useEffect } from "react";

const options = {
    method: "GET",
    headers: {
        'X-Auth-Token': import.meta.env.VITE_API_KEY_FOOTBALLDATA,
    },
  }
  
  

const optionsApiArgentina = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_API_KEY_RAPIDAPI,
		'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com'
	}
};


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
    
           const connect = await fetch(`/footballapi/competitions/${idLeague}/matches`,options)

           const res = [ await connect.json() ];

           const matches = res[0].matches.map(item => {
             return { ... item, date: item.utcDate.slice(0,10), hour: item.utcDate.slice(11,16) }
           })

           return matches;
        } catch (error) {
            console.log(error);
        }
    }
)

export const fetchMatchesToday = createAsyncThunk(
    'content/fetchMatchesToday',
    async (idLeague) => {
        try {
            const connect = await fetch(`/footballapi/competitions/${idLeague}/matches`,options)
            const res = [ await connect.json() ];
            const date = new Date().toISOString().slice(0,10);
            
            const matches = res[0].matches.map(item => {
                const localHour = `${item.utcDate.slice(11,13) - 3}${item.utcDate.slice(13,16)}` 
                return { ... item, date: item.utcDate.slice(0,10), hour: localHour }
            })

            const filterMatchesToday =  matches.filter(match => match.date === date);
            return filterMatchesToday;
        } catch (error) {
            console.log(error);
        }
    }
)

export const fetchMatchesArgentina = createAsyncThunk(
    'content/fetchMatchesArgentina',
    async () => {
        try {
           const date = new Date().toISOString().slice(0,10);
           const connect = await fetch(`/leagueArgentina/fixtures?date=${date}&league=128&season=2023`, optionsApiArgentina)
           const res = [await connect.json()];

           const matches = res[0].response.map(item => {
            const localHour = `${item.fixture.date.slice(11,13) - 3}${item.fixture.date.slice(13,16)}` 
            return { ... item, date: item.fixture.date.slice(0,10), hour: localHour }
           })
           localStorage.setItem('ligaArgentina', JSON.stringify(matches))
           return matches;
 
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