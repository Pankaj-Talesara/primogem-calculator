import { createSlice } from "@reduxjs/toolkit";
import { Banner } from "../functions/bannerDuration.js";

const bannerDuration = new Banner();

const endingPatchSlice = createSlice({
    name: "endingPatch",

    initialState: {
        patch: 3.4,
        half: 2,
        endOfPatch: false,

        timestamp: {
            day: 7,
            month: 1,
            year: 2023,

            hour: 18,
            minute: 0
        },
    },

    reducers: {
        SetEndingPatch: (state = initialState, action) => {
            const date = new Date(
                bannerDuration.getDate(
                    action.payload,
                    state.half,
                    state.endOfPatch == false ? "startingDate" : "endingDate"
                )
            );

            return {
                ...state,
                patch: action.payload,

                timestamp: {
                    day: date.getDate(),
                    month: date.getMonth(),
                    year: date.getFullYear(),

                    hour: date.getHours(),
                    minute: date.getMinutes(),
                },
            };
        },

        SetEndingHalf: (state = initialState, action) => {
            const date = new Date(
                bannerDuration.getDate(
                    state.patch,
                    action.payload,
                    state.endOfPatch == false ? "startingDate" : "endingDate"
                )
            );

            return {
                ...state,
                half: action.payload,

                timestamp: {
                    day: date.getDate(),
                    month: date.getMonth(),
                    year: date.getFullYear(),

                    hour: date.getHours(),
                    minute: date.getMinutes(),
                },
            };
        },

        SetEndOfPatch: (state, action) => {
            const date = new Date(
                bannerDuration.getDate(
                    state.patch,
                    state.half,
                    action.payload == false ? "startingDate" : "endingDate"
                )
            );

            return {
                ...state,
                endOfPatch: action.payload,

                timestamp: {
                    day: date.getDate(),
                    month: date.getMonth(),
                    year: date.getFullYear(),

                    hour: date.getHours(),
                    minute: date.getMinutes(),
                },
            };
        },
    },
});

export const { SetEndingPatch } = endingPatchSlice.actions;
export const { SetEndingHalf } = endingPatchSlice.actions;
export const { SetEndOfPatch } = endingPatchSlice.actions;

export default endingPatchSlice.reducer;
