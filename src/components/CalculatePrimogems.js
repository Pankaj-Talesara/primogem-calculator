import { useState } from "react";
import { useSelector } from "react-redux";

export default function CalculatePrimogems() {
    const [primogems, setPrimogems] = useState(0);

    const startingPatch = useSelector((state) => state.startingPatch);
    const startingDate = new Date(
        startingPatch.timestamp.year,
        startingPatch.timestamp.month,
        startingPatch.timestamp.day
    );

    const endingPatch = useSelector((state) => state.endingPatch);
    const endingDate = new Date(
        endingPatch.timestamp.year,
        endingPatch.timestamp.month,
        endingPatch.timestamp.day
    );

    const abyss = useSelector((state) => state.spiralAbyss);

    console.log("1: " + startingDate);
    console.log("2: " + endingDate);

    function calculatePrimogems() {
        let tempPrimogems = 0;

        tempPrimogems = tempPrimogems + calculateSpiralAbyss();

        setPrimogems(tempPrimogems);
    }

    function calculateSpiralAbyss() {
        const stars = abyss.totalStars / 3;

        let totalRotations = 0;
        let tempDate = new Date(startingDate);

        while (tempDate <= endingDate) {
            if (tempDate.getDate() == 1 || tempDate.getDate() == 15) {
                totalRotations = totalRotations + 1;
            }

            tempDate.setDate(tempDate.getDate() + 1);
        }

        console.log("totalRotations = " + totalRotations);

        return totalRotations * stars * 50;
    }

    return (
        <div className="flex flex-col w-full">
            <div className="flex w-full">
                <button
                    className="border border-Vichyssoise rounded-md p-3 bg-black bg-opacity-40 mx-auto"
                    onClick={calculatePrimogems}
                >
                    Calculate Primogems
                </button>
            </div>

            <div className="flex my-5 border border-Vichyssoise rounded-md p-3 bg-black bg-opacity-40 mx-auto">
                <img
                    src="images/Item_Primogem.png"
                    alt="image"
                    className="h-6"
                />
                <span className="flex mx-2 my-auto">{primogems}</span>
            </div>

            <div className="mx-10">
                Records {":  \n"}
                <div>{`Starting Date: ${startingDate}`}</div>
                <div>{`Ending Date: ${endingDate}`}</div>
                <div>{`No of days: ${
                    Math.floor(endingDate - startingDate) /
                    (1000 * 60 * 60 * 24)
                }`}</div>
            </div>
        </div>
    );
}
