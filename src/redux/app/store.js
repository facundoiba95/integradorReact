import { configureStore } from "@reduxjs/toolkit";
import apiLeagueSlice from "../features/api/apiLeagueSlice";
import apiMatchesSlice from "../features/api/apiMatchesSlice";

const store = configureStore({
    reducer:{
        apiLeagues: apiLeagueSlice,
        apiMatches: apiMatchesSlice
    }
})

export default store;