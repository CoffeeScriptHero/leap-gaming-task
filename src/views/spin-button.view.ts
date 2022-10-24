import { Filter, Sprite, Texture } from "pixi.js";

export class SpinButtonView extends Sprite {
    constructor() {
        super();
        this.texture = Texture.from("spin-button");
        this.buttonMode = true;
        this.interactive = true;
        this.anchor.set(0.5);
        this.width = 400;
        this.height = 150;
        this.x = window.innerWidth / 2;
        this.y = window.innerHeight - 70;
    }

    toggleButtonState = (alphaFilter: Filter) => {
        if (this.filters) {
            this.filters = this.filters.length ? [] : [alphaFilter];
        } else {
            this.filters = [alphaFilter];
        }
        this.interactive = !this.interactive;
    };

    handleClick = (alphaFilter: Filter, cb: Function) => {
        this.on("click", () => {
            this.toggleButtonState(alphaFilter);
            cb().then(() => {
                this.toggleButtonState(alphaFilter);
            });
        });
    };
}
