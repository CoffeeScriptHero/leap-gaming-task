import { Application, Texture, Sprite, Container, TilingSprite } from "pixi.js";

export class ApplicationView extends Application {
    constructor() {
        super();
        this.renderer.resize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.view);
    }

    loadAssets = async () => {
        return new Promise<void>((res, rej) => {
            const loader = this.loader;
            loader
                .add("background", "assets/backgrounds/page-background.png")
                .add("slot", "assets/backgrounds/slot-background.png")
                .add("apricot", "assets/symbols/apricot.png")
                .add("mushroom", "assets/symbols/mushroom.png")
                .add("pineapple", "assets/symbols/pineapple.png")
                .add("spin-button", "assets/other/spin-button.png");

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

    onLoad = () => {
        const bgTexture = Texture.from("background");
        const slotTexture = Texture.from("slot");
        const bgSprite = new TilingSprite(bgTexture, this.screen.width, this.screen.height);
        const slotSprite = new Sprite(slotTexture);

        slotSprite.width = 1200;
        slotSprite.height = 800;
        slotSprite.x = this.screen.width / 2;
        slotSprite.y = this.screen.height / 2;
        slotSprite.anchor.set(0.5);

        this.stage.addChild(bgSprite, slotSprite);
    };

    addChild = (child: Container | Sprite) => {
        this.stage.addChild(child);
    };

    start = () => {
        this.ticker.add(() => {
            console.log("ticker");
        });
    };

    getTicker = () => {
        return this.ticker;
    };
}
