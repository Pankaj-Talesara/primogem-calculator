import { createSlice } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";

const primogemsSlice = createSlice ({
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
        CalculatePrimogems: (state) => {
            
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

// function CalculateSpiralAbyss() {
//     const abyss = useSelector((state) => state.spiralAbyss)
//     const stars = abyss.totalStars / 3

//     const startingPatch = useSelector((state) => state.startingPatch);
//     const startingDate = new Date (startingPatch.year, startingPatch.month, startingPatch.day)

//     const endingPatch = useSelector((state) => state.endingPatch);
//     const endingDate = new Date (endingPatch.year, endingPatch.month, endingPatch.day)

//     let totalRotations = 0;

//     while (startingDate <= endingDate) {
//         if (startingDate.getDate() == 1 || startingDate.getDate() == 15) {
//             totalRotations = totalRotations + 1;
//         }

//         startingDate.setDate(startingDate.getDate() + 1)
//     }

// }