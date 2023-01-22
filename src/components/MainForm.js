import React from "react";

import PatchSelector from "./PatchPicker/PatchSelector";
import SpiralAbyss from "./SpiralAbyss/SpiralAbyss";
import CalculatePrimogems from "./CalculatePrimogems";
import PermanentContent from "./Content/PermanentContent";

class CalculateForm extends React.Component {
    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = (event) => {
        event.preventDefault();
    };

    render() {
        return (
            <form
                action="submit"
                className="flex flex-col "
                onSubmit={this.handleSubmit}
                id="calculateForm"
            >
                <div className="flex flex-row">
                    <PatchSelector />
                    <SpiralAbyss />
                    <PermanentContent />
                </div>

                <div className="flex ">
                    <CalculatePrimogems />
                </div>
            </form>
        );
    }
}

export default CalculateForm;
