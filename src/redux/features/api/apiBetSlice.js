import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    bet: [],
    isLoading: false,
    status: null,
    error: null
}

export const sendBet = createAsyncThunk(
    'bets/sendBet',
    async (bet) => {
        try {

            const token = localStorage.getItem('token');
            const req = await fetch(`${import.meta.env.VITE_URL_BACKEND}bets/sendBet`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "x-access-token": `${token}`
                },
                body: JSON.stringify(bet)
            })
            const res = await req.json();

            if(res.status == 200){
                alert('Apuesta realizada!')    
            } else if(res.status == 203){
                alert('Ya realizaste esta apuesta.')
            }
            return res;
        } catch (error) {
            console.log(error);
        }
    }
)

export const getBets = createAsyncThunk(
    'bets/getBets',
    async (idUser) => {
        if(idUser){
        const req = await fetch(`${import.meta.env.VITE_URL_BACKEND}bets/getBets`)
        const res = await req.json();
            const filterBetByIdUser = res.filter(obj => {
                for (let i = 0; i < obj.user.length; i++) {
                  if (obj.user[i]._id === idUser) {
                    return true;
                  }
                }
                return false;
              });
              return filterBetByIdUser;
        } else {
            const req = await fetch(`${import.meta.env.VITE_URL_BACKEND}bets/getBets`)
            const res = await req.json();
            return res;
        }
        
    }
)

export const apiBetSlice = createSlice({
    name: 'apiBets',
    initialState,
    reducers:{},
    extraReducers: ( builder ) => {
        builder.addCase(sendBet.rejected, ( state,action ) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
        builder.addCase(sendBet.pending, ( state,action ) => {
            state.isLoading = true;
        })
        builder.addCase(sendBet.fulfilled, ( state,action ) => {
            state.isLoading = false;
            state.bet = action.payload;
        })

        builder.addCase(getBets.rejected, ( state,action ) => {
            state.isLoading = false;
            state.error = action.error.message;
        })
        builder.addCase(getBets.pending, ( state,action ) => {
            state.isLoading = true;
        })
        builder.addCase(getBets.fulfilled, ( state,action ) => {
            state.bet = action.payload;
            state.isLoading = false;
        })
    }
})

export default apiBetSlice.reducer;