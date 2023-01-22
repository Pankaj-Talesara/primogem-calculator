export default function PermanentContent() {
    return (
        <div className="flex flex-col px-5 m-5 bg-black bg-opacity-20 rounded-2xl h-fit w-fit">
            <span className="flex flex-col m-5 mb-0 text-xl text-center select-none text-bold">
                Permanent Content
            </span>

            <div className="my-2">
                <div className="w-full my-4">
                    <SelectionBlock item={"Daily Commissions"} />
                </div>
                <div className="w-full my-4">
                    <SelectionBlock item={"Welkin"} />
                </div>
                <div className="w-full my-4">
                    <SelectionBlock item={"Battle Pass"} />
                </div>
                <div className="w-full my-4">
                    <SelectionBlock item={"Paimon's Bargain"} />
                </div>
                <div className="w-full my-4">
                    <SelectionBlock item={"HoYoLAB Checkin"} />
                </div>
            </div>
        </div>
    );
}

function SelectionBlock({ item }) {
    return (
        <div className="flex flex-row w-full place-content-between">
            <label htmlFor={item} className="flex my-auto leading-8 text-xl">
                {item}
            </label>
            <input
                type="checkbox"
                name={item}
                id={item}
                className="flex my-auto w-6 h-6 rounded-md bg-black border-opacity-80 bg-opacity-40 border-Vichyssoise border-2  text-Vichyssoise focus:ring-0 ml-10 focus:ring-offset-0"
            />
        </div>
    );
}
