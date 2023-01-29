import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import PatchPicker from "./PatchPicker";
import { Transition } from "@headlessui/react";

import {
    SetStartingPatch,
    SetStartingHalf,
} from "../../state/slices/startingPatchReducer";

import {
    SetStartingDate,
    revertToNotToday,
} from "../../state/slices/startingPatchReducer";


export default function SelectStartingPatch() {
    const startingPatch = useSelector((state) => state.startingPatch);
    const [isTodayChecked, setIsTodayChecked] = useState(false);
    const dispatch = useDispatch();

    function setStartingPatch(value) {
        dispatch(SetStartingPatch(value));
    }

    function setStartingHalf(value) {
        dispatch(SetStartingHalf(value));
    }

    return (
        <div className="w-full">
            <StartFromToday
                isTodayChecked={isTodayChecked}
                setIsTodayChecked={setIsTodayChecked}
            />

            <div
                className={`relative transition-all flex flex-col h-full mx-5`}
            >
                <Transition
                    show={!isTodayChecked}
                    enter="transition-all duration-150"
                    enterFrom="h-0 -translate-y-6 opacity-0 overflow-hidden"
                    enterTo="h-20 translate-y-0  opacity-100 overflow-visible"
                    leave="transition-all duration-150"
                    leaveFrom="h-20 translate-y-0  opacity-100 overflow-visible"
                    leaveTo="h-0 -translate-y-6 opacity-0 overflow-hidden"
                >
                    <div className="">
                        <span className="block text-Vichyssoise text-xs mx-1 pt-5 select-none">
                            Select Starting Patch
                        </span>
                    </div>
                    <PatchPicker
                        patch={startingPatch.patch}
                        half={startingPatch.half}
                        setPatch={setStartingPatch}
                        setHalf={setStartingHalf}
                    />
                </Transition>
            </div>
        </div>
    );
}

function StartFromToday({ isTodayChecked, setIsTodayChecked }) {
    const newDate = useSelector((state) => state.startingPatch);
    const dispatch = useDispatch();
    const date = new Date();

    function handleOnChange() {
        setIsTodayChecked(!isTodayChecked);
    }

    useEffect(() => {
        if (isTodayChecked === true) {
            dispatch(
                SetStartingDate()
            );
        } else {
            dispatch(revertToNotToday());
        }

        console.log(
            "StartFromToday:",
            newDate.day,
            newDate.month,
            newDate.year
        );
    }, [isTodayChecked]);

    return (
        <div className="flex p-5 pb-0 place-content-between">
            <label htmlFor="today-box" className="mr-2 my-auto text-lg">
                {"Start From Today"}
            </label>

            <input
                type="checkbox"
                id="today-box"
                name="today-box"
                className="customCheckbox"
                checked={isTodayChecked}
                onChange={handleOnChange}
            />
        </div>
    );
}
