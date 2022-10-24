import Button from "../classes/button";

export class SpinButtonView extends Button {
    constructor() {
        super("spin-button", 400, 150, window.innerWidth / 2, window.innerHeight - 70);
    }

    handleClick = (spin: Function, toggleBetButtonsState: Function) => {
        this.on("click", () => {
            this.toggleButtonState();
            toggleBetButtonsState();
            spin().then(() => {
                this.toggleButtonState();
                toggleBetButtonsState();
            });
        });
    };
}
