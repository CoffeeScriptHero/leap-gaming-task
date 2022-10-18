import { Reels } from "../models/reels.model";
import { Texture, Sprite, Container, Application, Ticker } from "pixi.js";

export class ReelsView extends Container {
    protected reels: Container[];
    protected isRunning: boolean;

    constructor(ticker: Ticker) {
        super();
        this.reels = [];
        this.isRunning = false;
        ticker.add((delta) => {
            if (this.isRunning) this.spin(delta);
        });
    }

    createReels = (reels: Reels) => {
        const slotTextures = [Texture.from("apricot"), Texture.from("mushroom"), Texture.from("pineapple")];

        for (let i = 0; i < reels.number; i++) {
            const reelContainer = new Container();
            reelContainer.x = i * reels.width;
            this.addChild(reelContainer);

            for (let j = 0; j < reels.rows; j++) {
                const symbol = new Sprite(slotTextures[j]);
                symbol.x = Math.round((reels.symbolSize - symbol.width) / 2);
                symbol.y = j * reels.symbolSize;

                reelContainer.addChild(symbol);
            }

            this.reels.push(reelContainer);
        }

        this.x = window.innerWidth / 2;
        this.y = window.innerHeight / 2;
        this.pivot.x = this.width / 2;
        this.pivot.y = this.height / 2;

        return this;
    };

    setRunning = () => {
        this.isRunning = true;
    };

    spin = (delta: number) => {
        for (let i = 0; i < this.reels.length; i++) {
            setTimeout(() => {
                for (let j = 0; j < this.reels[i].children.length; j++) {
                    const s = this.reels[i].children[j]; // current symbol
                    s.y -= 0.5;
                }
            }, i * 100);
        }
    };
}
