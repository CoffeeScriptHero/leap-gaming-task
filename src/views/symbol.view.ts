import { Sprite, Texture } from "pixi.js";
import { symbolModel } from "../models/symbol.model";

class Symbol extends Sprite {
    constructor(texture: Texture, colPosition: number) {
        super();
        this.texture = texture;
        this.setX(Math.round((symbolModel.size - this.width) / 2));
        this.setY(colPosition * symbolModel.size);
    }

    setX = (x: number) => {
        this.x = x;
    };

    setY = (y: number) => {
        this.y = y;
    };

    setTexture = (texture: Texture) => {
        this.texture = texture;
    };

    setRandomTexture = () => {
        const { textures, size } = symbolModel;
        const index = Math.floor(Math.random() * textures.length);
        this.texture = Texture.from(textures[index]);
        this.setX(Math.round((size - this.width) / 2));
    };
}

export default Symbol;
