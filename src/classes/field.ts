import { Sprite, Text, TextStyle, Texture, TextureSource } from "pixi.js";

class Field extends Sprite {
    private textureType: TextureSource;
    private text: Text;

    constructor(texture: TextureSource, pos: number, value: number, textStyle: TextStyle) {
        super();
        this.textureType = texture;
        this.texture = Texture.from(texture);
        this.y = pos * this.height - pos * 3;
        this.text = new Text(value, textStyle);
        this.text.x = this.width / 2;
        this.text.y = this.height / 2 + 20;
        this.text.anchor.set(0.5);
        this.addChild(this.text);
    }

    getTextureType = () => {
        return this.textureType;
    };

    updateText = (value: number) => {
        this.text.text = value;
    };
}

export default Field;
