import { configureStore } from "@reduxjs/toolkit";
import apiLeagueSlice from "../features/api/apiLeagueSlice";
import apiMatchesSlice from "../features/api/apiMatchesSlice";
import apiScorersSlice from "../features/api/apiScorersSlice";
import apiAuthSlice from "../features/api/apiAuthSlice";
import apiBetSlice from "../features/api/apiBetSlice";

const store = configureStore({
    reducer:{
        apiLeagues: apiLeagueSlice,
        apiMatches: apiMatchesSlice,
        apiScorers: apiScorersSlice,
        apiAuth: apiAuthSlice,
        apiBets: apiBetSlice
    }
})

export default store;