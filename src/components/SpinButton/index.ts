import { filters, Sprite, Texture } from "pixi.js";

class SpinButton {
    setup() {
        const btnTexture = Texture.from("spin-button");
        const btnSprite = new Sprite(btnTexture);

        btnSprite.buttonMode = true;
        btnSprite.interactive = true;

        btnSprite.anchor.set(0.5);

        btnSprite.width = 400;
        btnSprite.height = 150;

        btnSprite.x = window.innerWidth / 2;
        btnSprite.y = window.innerHeight - 70;

        return btnSprite;
    }

    onClick() {}
}

export default SpinButton;
