import { createSlice } from "@reduxjs/toolkit";

const contentListSlice = createSlice ({
    name: 'primogem',

    initialState: {
        primogems: 0,

        dailyCommission: true,
        spiralAbyss: {
            stars: 0,
            rotations: 0
        },
        hoyolabCheckin: false,
        
        welkin: false,
        battlePass: {
            include: false,
            rotations: 0
        },

        flagshipEvent: false,
        sideEvents: false,

        liveStream: true,
        updateCompensation: true,
        testRuns: true,
        
        miscPrimogems: 0
    },

    reducers: {
        // CalculatePrimogems: (state) => {
            
        // },

        SetDailyCommission: (state, action) => {
            return {
                ...state,
                dailyCommission: action.payload
            }
        },

        SetSpiralAbyss: (state, action) => {
            return {
                ...state,

                spiralAbyss: {
                    stars: action.payload.stars,
                    rotations: action.payload.rotations
                }
            }
        }
    }
})

export const { CalculatePrimogems } = contentListSlice.actions;
export const { SetSpiralAbyss } = contentListSlice.actions;
export const { SetDailyCommission } = contentListSlice.actions;

export default contentListSlice.reducer;