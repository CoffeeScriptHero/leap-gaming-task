import { SpinButtonView } from "../views/spin-button.view";

class SpinButtonController {
    private spinButtonView: SpinButtonView;

    constructor() {
        this.spinButtonView = new SpinButtonView();
    }

    getButton = () => {
        return this.spinButtonView;
    };

    handleClick = (spin: Function, toggleBetButtonsState: Function) => {
        this.spinButtonView.handleClick(spin, toggleBetButtonsState);
    };
}

export default SpinButtonController;
