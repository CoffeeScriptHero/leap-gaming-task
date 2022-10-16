import { Application, Container, Loader, Sprite, Texture } from "pixi.js";

class Reels {
    protected loader;

    constructor(loader: Loader) {
        this.loader = loader;
    }

    setup() {
        const apricotTexture = Texture.from("apricot");
        const apricotSprite = new Sprite(apricotTexture);
    }
}

export default Reels;
