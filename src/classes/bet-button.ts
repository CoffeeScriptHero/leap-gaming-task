import Button from "./button";
import { TextureSource } from "pixi.js";

class BetButton extends Button {
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
        this.checkToDisable(textureType, bet);
        this.on("click", this.handleClick.bind(this, textureType, changeBet));
    }

    checkToDisable = (textureType: TextureSource, bet: number) => {
        if ((bet === 20 && textureType === "minus-button") || (bet === 200 && textureType === "plus-button")) {
            this.toggleButtonState();
        }
    };

    private handleClick = (textureType: TextureSource, changeBet: Function) => {
        changeBet(textureType === "plus-button" ? 20 : -20, this);
    };
}

export default BetButton;
