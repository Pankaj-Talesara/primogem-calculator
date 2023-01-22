import { createSlice } from "@reduxjs/toolkit";

const bannerSlice = createSlice({
    name: "banner",

    initialState: {
        3.3: {
            1: {
                startingDate: new Date(Date.UTC(2022, 11, 7, 6, 0)),
                endingDate: new Date(Date.UTC(2022, 11, 27, 17, 59)),
            },
            2: {
                startingDate: new Date(Date.UTC(2022, 11, 27, 18, 0)),
                endingDate: new Date(Date.UTC(2023, 0, 17, 14, 59)),
            },
        },

        3.4: {
            1: {
                startingDate: new Date(Date.UTC(2023, 0, 18, 6, 0)),
                endingDate: new Date(Date.UTC(2023, 1, 7, 17, 59)),
            },
            2: {
                startingDate: new Date(Date.UTC(2023, 1, 7, 18, 0)),
                endingDate: new Date(Date.UTC(2023, 1, 28, 14, 59)),
            },
        },

        3.5: {
            1: {
                startingDate: new Date(Date.UTC(2023, 2, 1, 6, 0)),
                endingDate: new Date(Date.UTC(2023, 2, 21, 17, 59)),
            },
            2: {
                startingDate: new Date(Date.UTC(2023, 2, 21, 18, 0)),
                endingDate: new Date(Date.UTC(2023, 3, 11, 14, 59)),
            },
        },

        3.6: {
            1: {
                startingDate: new Date(Date.UTC(2023, 3, 12, 6, 0)),
                endingDate: new Date(Date.UTC(2023, 4, 2, 17, 59)),
            },
            2: {
                startingDate: new Date(Date.UTC(2023, 4, 2, 18, 0)),
                endingDate: new Date(Date.UTC(2023, 4, 23, 14, 59)),
            },
        },

        3.7: {
            1: {
                startingDate: new Date(Date.UTC(2023, 4, 24, 6, 0)),
                endingDate: new Date(Date.UTC(2023, 4, 13, 17, 59)),
            },
            2: {
                startingDate: new Date(Date.UTC(2023, 5, 13, 18, 0)),
                endingDate: new Date(Date.UTC(2023, 6, 4, 14, 59)),
            },
        },
        
        3.8: {
            1: {
                startingDate: new Date(Date.UTC(2023, 6, 5, 6, 0)),
                endingDate: new Date(Date.UTC(2023, 6, 25, 17, 59)),
            },
            2: {
                startingDate: new Date(Date.UTC(2023, 6, 25, 18, 0)),
                endingDate: new Date(Date.UTC(2023, 7, 15, 14, 59)),
            },
        },
    },
});
