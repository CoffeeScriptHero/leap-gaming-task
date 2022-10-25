import { SpinButtonView } from "../views/spin-button.view";

class SpinButtonController {
    private spinButtonView: SpinButtonView;

    constructor() {
        this.spinButtonView = new SpinButtonView();
    }

    getButton = () => this.spinButtonView;

    handleClick = (spin: Function, updateStatistics: Function) => {
        this.spinButtonView.handleClick(spin, updateStatistics);
    };
}

export default SpinButtonController;
