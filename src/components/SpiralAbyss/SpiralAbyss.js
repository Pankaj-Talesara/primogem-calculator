import { RadioGroup } from "@headlessui/react";
import { useDispatch, useSelector } from "react-redux";

import {
    SetFloorEleven,
    SetFloorNine,
    SetFloorTen,
    SetFloorTwelve,
} from "../../state/slices/spiralAbyssReducer";

export default function SpiralAbyss() {
    const floor = useSelector((state) => state.spiralAbyss);

    return (
        <div className="flex flex-col bg-black bg-opacity-20 m-5 rounded-2xl h-fit">
            <div className="flex flex-col m-5 text-xl text-center select-none">
                Spiral Abyss
            </div>

            <div className="flex flex-col m-5 mt-0">
                <FloorBlock
                    floorNumber={12}
                    stars={floor.nine}
                    setStars={SetFloorNine}
                />
                <FloorBlock
                    floorNumber={11}
                    stars={floor.ten}
                    setStars={SetFloorTen}
                />
                <FloorBlock
                    floorNumber={10}
                    stars={floor.eleven}
                    setStars={SetFloorEleven}
                />
                <FloorBlock
                    floorNumber={9}
                    stars={floor.twelve}
                    setStars={SetFloorTwelve}
                />
            </div>
        </div>
    );
}

function FloorBlock({ floorNumber, stars, setStars }) {
    // const [stars, setStars] = useState("0");
    const dispatch = useDispatch();

    function handleEvent(value) {
        dispatch(setStars(value));
    }

    return (
        <div className="rounded-md border border-Vichyssoise bg-black bg-opacity-40 my-2">
            <RadioGroup
                value={stars}
                onChange={handleEvent}
                as="div"
                className="flex flex-row"
            >
                <RadioGroup.Label
                    className={
                        "flex px-2 my-auto text-lg leading-10 border-r-1 border-Vichyssoise border-r w-24 select-none"
                    }
                >{`Floor ${floorNumber}`}</RadioGroup.Label>
                <RadioGroup.Option
                    key="spiral-0"
                    value={0}
                    className={`flex my-auto h-full leading-8 bg-opacity-0`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill={`${stars == 0 ? "#E9CA78" : "rgb(0,0,0,0)"}`}
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke=""
                        className={`mx-2 w-6 h-6 my-auto  ${
                            stars == 0
                                ? "stroke-evening"
                                : " stroke-Vichyssoise"
                        }`}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </RadioGroup.Option>

                {[3, 6, 9].map((item) => (
                    <RadioGroup.Option
                        key={item}
                        value={item}
                        className={`p-1 h-full leading-8 bg-opacity-0
                        
                        ${item == 9 ? "rounded-r-[4px]" : ""}
                        ${item == 0 ? "pl-2" : ""}`}
                    >
                        <div className="flex my-auto w-8 h-8">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill={`${
                                    item <= stars ? "#E9CA78" : "rgb(0,0,0,0)"
                                }`}
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className={`w-6 h-6 my-auto ${
                                    item <= stars ? "#E9CA78" : "rgb(0,0,0,0)"
                                }`}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                />
                            </svg>
                        </div>
                    </RadioGroup.Option>
                ))}
            </RadioGroup>
        </div>
    );
}
