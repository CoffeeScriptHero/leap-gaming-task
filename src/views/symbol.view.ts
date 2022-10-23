import { Sprite, Texture } from "pixi.js";
import { symbolModel as model } from "../models/symbol.model";

class Symbol extends Sprite {
    private defaultY: number;

    constructor(texture: Texture, colPosition: number) {
        super();
        this.texture = texture;
        this.setX(Math.round((model.size - this.width) / 2));
        this.setY(colPosition * model.size);
        this.defaultY = colPosition * model.size;
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
        const { textures } = model;
        const index = Math.floor(Math.random() * textures.length);
        this.texture = Texture.from(textures[index]);
        this.setX(Math.round((model.size - this.width) / 2));
    };
}

export default Symbol;
