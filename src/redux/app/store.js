import { configureStore } from "@reduxjs/toolkit";
import apiLeagueSlice from "../features/api/apiLeagueSlice";
import apiMatchesSlice from "../features/api/apiMatchesSlice";
import apiScorersSlice from "../features/api/apiScorersSlice";

const store = configureStore({
    reducer:{
        apiLeagues: apiLeagueSlice,
        apiMatches: apiMatchesSlice,
        apiScorers: apiScorersSlice
    }
})

export default store;