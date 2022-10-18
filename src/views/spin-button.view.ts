import { Filter, filters, Sprite, Texture } from "pixi.js";

export class SpinButtonView extends Sprite {
    constructor() {
        super();
        this.texture = Texture.from("spin-button");
        this.buttonMode = true;
        this.interactive = true;
    }

    generate = () => {
        this.anchor.set(0.5);

        this.width = 400;
        this.height = 150;

        this.x = window.innerWidth / 2;
        this.y = window.innerHeight - 70;

        return this;
    };

    handleClick = (alphaFilter: Filter, cb: Function) => {
        this.on("click", () => {
            cb();
            this.filters = [alphaFilter];
        });
    };
}
