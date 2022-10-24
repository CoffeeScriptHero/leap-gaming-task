import { SpinButtonView } from "../views/spin-button.view";
import { spinButtonModel, SpinButtonInterface } from "../models/spin-button.model";

class SpinButtonController {
    private spinButtonView: SpinButtonView;
    private spinButtonModel: SpinButtonInterface;

    constructor() {
        this.spinButtonView = new SpinButtonView();
        this.spinButtonModel = spinButtonModel;
    }

    getButton = () => {
        return this.spinButtonView;
    };

    handleClick = (cb: Function) => {
        this.spinButtonView.handleClick(this.spinButtonModel.alphaFilter, cb);
    };
}

export default SpinButtonController;
