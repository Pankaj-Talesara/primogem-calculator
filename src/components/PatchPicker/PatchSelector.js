import React from "react";

import SelectStartingPatch from './StartingPatch'
import SelectEndingPatch from "./EndingPatch";

export default function PatchSelector() {
    return (
        <div className="flex flex-col">
            <div className="flex relative bg-black bg-opacity-20 m-5 rounded-2xl">
                <div className="z-10 mb-5 w-full">
                    <SelectStartingPatch />
                </div>
            </div>

            <div className="flex flex-col relative bg-black bg-opacity-20 mx-5 mb-5 rounded-2xl">
                <div className="my-5">
                    <SelectEndingPatch />
                </div>
            </div>

        </div>
    );
}

