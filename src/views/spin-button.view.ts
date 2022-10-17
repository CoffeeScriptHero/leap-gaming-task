import { Filter, filters, Sprite, Texture } from "pixi.js";

export class SpinButtonView {
    protected button: Sprite;

    constructor() {
        this.button = new Sprite(Texture.from("spin-button"));
        this.button.buttonMode = true;
        this.button.interactive = true;
    }

    generate = () => {
        this.button.anchor.set(0.5);

        this.button.width = 400;
        this.button.height = 150;

        this.button.x = window.innerWidth / 2;
        this.button.y = window.innerHeight - 70;

        return this.button;
    };

    handleClick = (alphaFilter: Filter) => {
        this.button.on("click", () => (this.button.filters = [alphaFilter]));
    };
}
