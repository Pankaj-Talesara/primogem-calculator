import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
    SetEndingPatch,
    SetEndOfPatch,
    SetEndingHalf,
} from "../../state/slices/endingPatchReducer";

import PatchPicker from "./PatchPicker";

export default function SelectEndingPatch() {
    const endingPatch = useSelector((state) => state.endingPatch);
    const dispatch = useDispatch();

    function setEndingPatch(value) {
        dispatch(SetEndingPatch(value));
    }
    function setEndingHalf(value) {
        dispatch(SetEndingHalf(value));
    }

    return (
        <div className="flex flex-col h-full mx-5">
            <div className="">
                <span className="block text-Vichyssoise text-xs mx-1 select-none">
                    Select Ending Patch
                </span>
            </div>

            <PatchPicker
                patch={endingPatch.patch}
                half={endingPatch.half}
                setPatch={setEndingPatch}
                setHalf={setEndingHalf}
            />

            <TillEndOfPatch
                isEndOfPatchChecked={endingPatch.endOfPatch}
            />
        </div>
    );
}

function TillEndOfPatch({ isEndOfPatchChecked}) {
    const dispatch = useDispatch();

    function handleEvent(e) {
        dispatch(SetEndOfPatch(e.target.checked));
    }

    return (
        <div className="flex pt-5 pb-0 place-content-between">
            <label htmlFor="end-box" className="mr-2 my-auto text-lg">
                {"Until End of Patch"}
            </label>

            <input
                type="checkbox"
                id="end-box"
                name="end-box"
                className="customCheckbox"
                checked={isEndOfPatchChecked}
                onChange={handleEvent}
            />
        </div>
    );
}
