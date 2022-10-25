import Button from "./button";
import { TextureSource } from "pixi.js";

class BetButton extends Button {
    private type: TextureSource;

    constructor(
        textureType: TextureSource,
        width: number,
        height: number,
        x: number,
        y: number,
        bet: number,
        changeBet: Function,
    ) {
        super(textureType, width, height, x, y);
        this.type = textureType;
        this.on("click", this.handleClick.bind(this, changeBet));
        if (this.checkToDisable(bet)) this.toggleButtonState();
    }

    private handleClick = (changeBet: Function) => {
        changeBet(this.type === "plus-button" ? 20 : -20, this);
    };

    checkToDisable = (bet: number) => {
        if ((bet === 20 && this.type === "minus-button") || (bet === 200 && this.type === "plus-button")) {
            return true;
        }
        return false;
    };
}

export default BetButton;
