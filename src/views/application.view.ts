import { Application, Texture, Sprite, Container, TilingSprite } from "pixi.js";

export class ApplicationView extends Application {
    constructor() {
        super();
        this.renderer.resize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.view);
    }

    private onLoad = () => {
        const bgTexture = Texture.from("background");
        const slotTexture = Texture.from("slot");
        const monkeyTexture = Texture.from("monkey");
        const titleTexture = Texture.from("title");

        const bgSprite = new TilingSprite(bgTexture, this.screen.width, this.screen.height);
        const slotSprite = new Sprite(slotTexture);
        const monkeySprite = new Sprite(monkeyTexture);
        const titleSprite = new Sprite(titleTexture);

        slotSprite.width = 1200;
        slotSprite.height = 800;
        slotSprite.x = this.screen.width / 2;
        slotSprite.y = this.screen.height / 2;
        slotSprite.anchor.set(0.5);

        titleSprite.y = -slotSprite.height / 2;
        titleSprite.width = 470;
        titleSprite.height = 200;
        titleSprite.anchor.set(0.5);
        slotSprite.addChild(titleSprite);

        monkeySprite.x = 300;
        monkeySprite.y = this.screen.height - monkeySprite.height;

        this.stage.addChild(bgSprite, slotSprite, monkeySprite);
    };

    loadAssets = async () => {
        return new Promise<void>((res, rej) => {
            const loader = this.loader;
            loader
                .add("background", "assets/backgrounds/page-background.png")
                .add("slot", "assets/backgrounds/slot-background.png")
                .add("apricot", "assets/symbols/apricot.png")
                .add("mushroom", "assets/symbols/mushroom.png")
                .add("pineapple", "assets/symbols/pineapple.png")
                .add("spin-button", "assets/buttons/spin.png")
                .add("plus-button", "assets/buttons/plus.png")
                .add("minus-button", "assets/buttons/minus.png")
                .add("credits", "assets/fields/credits.png")
                .add("prize", "assets/fields/prize.png")
                .add("bet", "assets/fields/total-bet.png")
                .add("monkey", "assets/other/monkey.png")
                .add("title", "assets/other/title.png");

            loader.onComplete.once(() => {
                this.onLoad();
                res();
            });

            loader.onError.once(() => {
                rej();
            });

            loader.load();
        });
    };

    addChild = (child: Container | Sprite) => {
        this.stage.addChild(child);
    };
}
