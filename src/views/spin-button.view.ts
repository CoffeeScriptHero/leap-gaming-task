import Button from "../classes/button";
import { SpinButtonInterface } from "../models/spin-button.model";

export class SpinButtonView extends Button {
    constructor(model: SpinButtonInterface) {
        super("spin-button", model.width, model.height, model.pos.x, model.pos.y);
    }

    handleClick = (spin: Function, updateStatistics: Function) => {
        this.on("click", () => {
            this.toggleButtonState();
            updateStatistics();
            spin().then((res: any) => {
                this.toggleButtonState();
                const coeff = res.length ? res.length / 3 : -1;
                // each 3 symbols equals to one win line. if there are no win lines, pass -1
                // to withdraw money by bet
                updateStatistics(coeff);
            });
        });
    };
}
