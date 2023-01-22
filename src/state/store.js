import { configureStore} from "@reduxjs/toolkit";
import startingPatch from './slices/startingPatchReducer'
import endingPatch from './slices/endingPatchReducer'
import spiralAbyss from './slices/spiralAbyssReducer'
import banner from './slices/bannerReducer'

export const store = configureStore({
    reducer: {
        startingPatch: startingPatch,
        endingPatch: endingPatch,
        spiralAbyss: spiralAbyss,
        // banner: banner,
    },
});
