import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

import { Banner } from "../functions/bannerDuration.js";

const bannerDuration = new Banner();

const startingPatchSlice = createSlice({
    name: "startingPatch",

    initialState: {
        patch: 3.3,
        half: 1,

        timestamp: {
            day: 7,
            month: 11,
            year: 2022,

            hour: 6,
            minute: 0,
        },
    },

    reducers: {
        SetStartingDate: (state = initialState, action) => {
            const date = new Date()
            
            return {
                ...state,

                timestamp: {
                    day: date.getUTCDate(),
                    month: date.getUTCMonth(),
                    year: date.getFullYear(),

                    hour: date.getUTCHours(),
                    minute: date.getUTCMinutes()
                },
            };
        },

        SetStartingPatch: (state = initialState, action) => {
            const date = new Date(
                bannerDuration.getDate(
                    action.payload,
                    state.half,
                    "startingDate"
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
        SetStartingHalf: (state, action) => {
            const date = new Date(
                bannerDuration.getDate(
                    state.patch,
                    action.payload,
                    "startingDate"
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

        revertToNotToday: (state) => {
            // const totalDays =
            //     (state.patch * 10 - 33) * 42 + (state.half - 1) * 21;

            // const date = new Date(2022, 11, 7 + totalDays);

            const date = new Date(
                bannerDuration.getDate(
                    state.patch,
                    state.half,
                    "startingDate"
                )
            );

            return {
                ...state,

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

export const { SetStartingPatch } = startingPatchSlice.actions;
export const { SetStartingHalf } = startingPatchSlice.actions;
export const { SetStartingDate } = startingPatchSlice.actions;
export const { revertToNotToday } = startingPatchSlice.actions;

export default startingPatchSlice.reducer;
