export default function Navbar() {
    return (
        <div className="flex h-12 place-content-center bg-black bg-opacity-20">
            <div className="h-12 flex">
                <img
                    src="images/Item_Primogem.png"
                    alt="image"
                    className="h-full pl-2 mx-auto"
                />

                <div className="inline-block font-semibold text-3xl mx-3 h-10 my-2 text-Vichyssoise">
                    Website
                </div>
            </div>
        </div>
    );
}