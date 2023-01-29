import { SetDailyCommission } from "@/state/slices/contentListReducer";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function PermanentContent() {
    const contentList = useSelector((state) => state.contentList);

    return (
        <div className="flex flex-col px-5 m-5 bg-black bg-opacity-20 rounded-2xl h-fit w-fit">
            <span className="flex flex-col m-5 mb-0 text-xl text-center select-none text-bold">
                Permanent Content
            </span>

            <div className="my-2">
                <DailyCommission
                    contentList={contentList}
                />
                {/* <Welkin />
                <BattlePass />
                <PaimonsBargain />
                <HoYoLAB /> */}
            </div>
        </div>
    );
}

function SelectionBlock({ item, check, handleEvent }) {
    // function handleEvent() {
    //     console.log("l");
    // }

    return (
        <div className="flex flex-row w-full place-content-between">
            <label htmlFor={item} className="flex my-auto leading-8 text-xl">
                {item}
            </label>
            <input
                type="checkbox"
                name={item}
                id={item}
                checked={check}
                onChange={handleEvent}
                className="flex my-auto w-6 h-6 rounded-md bg-black border-opacity-80 bg-opacity-40 border-Vichyssoise border-2  text-Vichyssoise focus:ring-0 ml-10 focus:ring-offset-0"
            />
        </div>
    );
}

function DailyCommission({ contentList }) {
    const dispatch = useDispatch();

    function handleCommissions(e) {
        dispatch(
            SetDailyCommission(e.target.checked)
        );
    }
    return (
        <>
            <div className="w-full my-4">
                <SelectionBlock
                    item={"Daily Commissions"}
                    check={contentList.dailyCommission}
                    handleEvent={handleCommissions}
                />
            </div>
        </>
    );
}

function Welkin() {
    return (
        <div className="w-full my-4">
            <SelectionBlock item={"Welkin"} />
        </div>
    );
}

function BattlePass() {
    return (
        <div className="w-full my-4">
            <SelectionBlock item={"Battle Pass"} />
        </div>
    );
}

function PaimonsBargain() {
    return (
        <div className="w-full my-4">
            <SelectionBlock item={"Paimon's Bargain"} />
        </div>
    );
}

function HoYoLAB() {
    return (
        <div className="w-full my-4">
            <SelectionBlock item={"HoYoLAB Checkin"} />
        </div>
    );
}
