import { SpinButtonView } from "../views/spin-button.view";
import { SpinButton } from "../models/spin-button.model";

export class SpinButtonController {
    constructor(private spinButtonView: SpinButtonView, private spinButton: SpinButton) {}

    generate = () => {
        return this.spinButtonView.generate();
    };

    handleClick = () => {
        this.spinButtonView.handleClick(this.spinButton.alphaFilter);
    };
}
