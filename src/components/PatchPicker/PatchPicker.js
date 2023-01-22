import { Listbox, Transition, RadioGroup } from "@headlessui/react";
import React from "react";
import { useDispatch } from "react-redux";

const START_PATCH = 33;

export default function PatchPicker({ patch, half, setPatch, setHalf }) {
    const dispatch = useDispatch();

    return (
        <div className="flex flex-1">
            <SelectPatchList />

            <SelectPatchHalf />
        </div>
    );

    function SelectPatchList() {
        const patchList = [];
        for (let i = START_PATCH; i <= 38; i++) {
            patchList.push(i / 10);
        }

        return (
            <div className="relative leading-10 w-full">
                <Listbox value={patch} onChange={setPatch}>
                    <Listbox.Button className="flex customButton rounded-l-md w-full text-center border border-r-0">
                        <span className="block flex-1 text-center w-full">
                            {patch}
                        </span>
                        <div className="my-auto pr-2">
                            {
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-4 h-4"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                                    />
                                </svg>
                            }
                        </div>
                    </Listbox.Button>

                    <Transition
                        enter="transition duration-450 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-75 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Listbox.Options className="absolute w-full text-center rounded-md bg-black bg-opacity-20 defaultBorder my-1">
                            {patchList.map((patchItem, index) => (
                                <Listbox.Option
                                    value={patchItem}
                                    key={patchItem}
                                >
                                    {({ active }) => (
                                        <span
                                            className={`w-full block m-0 ${
                                                active
                                                    ? "bg-Vichyssoise text-black rounded-[4px] "
                                                    : "bg-evening"
                                            } ${
                                                index == 0
                                                    ? "rounded-md border-Vichyssoise"
                                                    : ""
                                            } ${
                                                index == patchList.length - 1
                                                    ? "rounded-md border-Vichyssoise"
                                                    : ""
                                            }`}
                                        >
                                            <span className="select-none">
                                                {patchItem}
                                            </span>
                                        </span>
                                    )}
                                </Listbox.Option>
                            ))}
                        </Listbox.Options>
                    </Transition>
                </Listbox>
            </div>
        );
    }

    function SelectPatchHalf() {
        console.log(patch + " " + half);

        return (
            <RadioGroup
                value={half}
                onChange={setHalf}
                className="flex relative align-middle h-fit w-fit border border-l-0 border-Vichyssoise rounded-r-xl"
                name="patch-half"
                as="div"
            >
                <RadioGroup.Option value={1}>
                    {({ checked }) => (
                        <span
                            className={`inline-block relative text-center w-14 px-3 text-md leading-10 border-Vichyssoise transition-all select-none ${
                                checked
                                    ? "text-evening border-l-0 border-opacity-0 bg-Vichyssoise "
                                    : "text-Vichyssoise border-l  bg-opacity-0"
                            }`}
                        >
                            I
                        </span>
                    )}
                </RadioGroup.Option>

                <RadioGroup.Option value={2}>
                    {({ checked }) => (
                        <span
                            className={`inline-block relative text-center w-14 px-3 text-md leading-10 bg-black rounded-r-lg transition-all select-none ${
                                checked
                                    ? "text-evening bg-Vichyssoise"
                                    : "text-Vichyssoise bg-opacity-0"
                            }`}
                        >
                            II
                        </span>
                    )}
                </RadioGroup.Option>

                {/* <HalfButtonBackground selectedHalf={half} /> */}
            </RadioGroup>
        );
    }
}

// function HalfButtonBackground({ selectedHalf }) {
//     let selectedHalfRef = React.createRef(selectedHalf);
    
//     return (
//         <div
//             id="backgroundDiv"
//             ref={selectedHalfRef}
//             className={`${
//                 selectedHalf == 1 ? "translate-x-[0%]" : "translate-x-[100%]"
//             } flex transition ease-in-out duration-100 translate h-full w-[50%] absolute rounded-lg  bg-Vichyssoise`}
//         >
//             <span className="my-auto mx-auto text-white">{`${
//                 selectedHalf === 1 ? "I" : "II"
//             }`}</span>
//         </div>
//     );
// }
