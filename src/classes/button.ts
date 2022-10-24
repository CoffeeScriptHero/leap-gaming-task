import { Sprite, TextureSource, Texture, filters } from "pixi.js";

class Button extends Sprite {
    constructor(texture: TextureSource, width: number, height: number, x: number, y: number) {
        super();
        this.texture = Texture.from(texture);
        this.buttonMode = true;
        this.interactive = true;
        this.anchor.set(0.5);
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
    }

    toggleButtonState = () => {
        const alphaFilter = new filters.AlphaFilter(0.7);
        this.filters = this.filters?.length ? [] : [alphaFilter];
        this.interactive = !this.interactive;
    };
}

export default Button;
