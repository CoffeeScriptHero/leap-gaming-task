import { Reels } from "../models/reels.model";
import { Texture, Sprite, Container, Application, Ticker, Graphics } from "pixi.js";

export class ReelsView extends Container {
    protected reels: Container[];
    protected isRunning: boolean;
    protected bounceEnd: boolean;

    constructor(ticker: Ticker) {
        super();
        this.reels = [];
        this.isRunning = false;
        this.bounceEnd = false;
        ticker.add((delta) => {
            if (this.isRunning) {
                if (this.bounceEnd) {
                    // this.spin(delta);
                } else {
                    this.makeBounce(delta);
                }
            }
        });
    }

    createReels = (reels: Reels) => {
        const slotTextures = [Texture.from("apricot"), Texture.from("mushroom"), Texture.from("pineapple")];

        for (let i = 0; i < reels.number; i++) {
            const reelContainer = new Container();
            reelContainer.x = reels.pos.x + i * reels.width;
            reelContainer.y = reels.pos.y;
            this.addChild(reelContainer);

            for (let j = 0; j < reels.rows; j++) {
                const symbol = new Sprite(slotTextures[j]);
                symbol.x = Math.round((reels.symbolSize - symbol.width) / 2);
                symbol.y = j * reels.symbolSize;

                reelContainer.addChild(symbol);
            }

            this.reels.push(reelContainer);
        }

        return this;
    };

    setRunning = () => {
        this.isRunning = true;
    };

    spin = (delta: number) => {
        for (let i = 0; i < this.reels.length; i++) {
            const reel = this.reels[i];
        }
    };

    makeBounce = (delta: number) => {
        const reelToBounce = this.reels.find((r) => r.children[0].y > -30);

        if (reelToBounce) {
            for (let i = 0; i < reelToBounce.children.length; i++) {
                const s = reelToBounce.children[i];
                s.y -= Math.cos(delta) * 2;
            }
        } else {
            this.bounceEnd = true;
        }
    };
}
