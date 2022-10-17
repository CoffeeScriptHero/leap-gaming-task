import { Application, Texture, Sprite, Container, TilingSprite } from "pixi.js";

export class ApplicationView {
    private app: Application;

    constructor() {
        this.app = new Application();
        this.app.renderer.resize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.app.view);
    }

    loadAssets = async () => {
        return new Promise<void>((res, rej) => {
            const loader = this.app.loader;
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
        const bgSprite = new TilingSprite(bgTexture, this.app.screen.width, this.app.screen.height);
        const slotSprite = new Sprite(slotTexture);

        slotSprite.width = 1200;
        slotSprite.height = 800;
        slotSprite.x = this.app.screen.width / 2;
        slotSprite.y = this.app.screen.height / 2;
        slotSprite.anchor.set(0.5);

        this.app.stage.addChild(bgSprite, slotSprite);
    };

    addChild = (child: Container | Sprite) => {
        this.app.stage.addChild(child);
    };

    start = () => {
        this.app.ticker.add(() => {
            console.log("ticker");
        });
    };
}
