import { SpinButtonView } from "../views/spin-button.view";
import { spinButtonModel } from "../models/spin-button.model";

class SpinButtonController {
    private spinButtonView: SpinButtonView;

    constructor() {
        this.spinButtonView = new SpinButtonView(spinButtonModel);
    }

    getButton = () => this.spinButtonView;

    handleClick = (spin: Function, updateStatistics: Function) => {
        this.spinButtonView.handleClick(spin, updateStatistics);
    };
}

export default SpinButtonController;
