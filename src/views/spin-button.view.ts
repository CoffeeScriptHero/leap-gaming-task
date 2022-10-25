import Button from "../classes/button";

export class SpinButtonView extends Button {
    constructor() {
        super("spin-button", 400, 150, window.innerWidth / 2, window.innerHeight - 70);
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
