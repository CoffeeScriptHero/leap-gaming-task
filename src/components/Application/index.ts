import { Application as PIXIApplication, Texture, TilingSprite, Container, Sprite } from "pixi.js";

class Application extends PIXIApplication {
    protected app: PIXIApplication;
    protected WIDTH = 1200;
    protected HEIGHT = 800;

    constructor() {
        super();
        this.app = new PIXIApplication({
            width: this.WIDTH,
            height: this.HEIGHT,
            antialias: true,
            backgroundColor: 0x943fc,
        });
        this.app.renderer.resize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.app.view);
    }

    async loadAssets(): Promise<void> {
        return new Promise((res, rej) => {
            const loader = this.app.loader;
            loader
                .add("background", "assets/backgrounds-assets/page-background.png")
                .add("slot", "assets/backgrounds-assets/slot-background.png")
                .add("apricot", "assets/symbols-assets/apricot.png")
                .add("mushroom", "assets/symbols-assets/mushroom.png")
                .add("pineapple", "assets/symbols-assets/pineapple.png");

            loader.onComplete.once(() => {
                this.onLoad();
                res();
            });

            loader.onError.once(() => {
                rej();
            });

            loader.load();
        });
    }

    onLoad() {
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
    }

    addReels() {}
}

export default Application;
