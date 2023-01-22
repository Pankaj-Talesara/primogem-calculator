import { createSlice } from "@reduxjs/toolkit";

const spiralAbyssSlice = createSlice({
    name: 'spiralAbyss',

    initialState: {
        totalStars: 0,
        nine: 0,
        ten: 0,
        eleven: 0,
        twelve: 0,
    },

    reducers: {
        SetFloorNine: (state, action) => {
            return {
                ...state,
                nine: action.payload,

                totalStars:
                    action.payload + state.ten + state.eleven + state.twelve,
            };
        },
        SetFloorTen: (state, action) => {
            return {
                ...state,
                ten: action.payload,

                totalStars:
                    state.nine + action.payload + state.eleven + state.twelve,
            };
        },
        SetFloorEleven: (state, action) => {
            return {
                ...state,
                eleven: action.payload,

                totalStars:
                    state.nine + state.ten + action.payload + state.twelve,
            };
        },
        SetFloorTwelve: (state, action) => {
            return {
                ...state,
                twelve: action.payload,

                totalStars: state.nine + state.ten + state.eleven + action.payload
            };
        },
    },
});


export const { SetFloorNine } = spiralAbyssSlice.actions;
export const { SetFloorTen } = spiralAbyssSlice.actions;
export const { SetFloorEleven } = spiralAbyssSlice.actions;
export const { SetFloorTwelve } = spiralAbyssSlice.actions;


export default spiralAbyssSlice.reducer;