import { Reels } from "../models/reels.model";
import { Texture, Sprite, Container, Application, Ticker } from "pixi.js";

export class ReelsView extends Container {
    protected reels: Container[];

    constructor() {
        super();
        this.reels = [];
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

    spin = (ticker: Ticker) => {
        let goDown = false;

        ticker.add((delta) => {
            for (let i = 0; i < this.reels.length; i++) {
                for (let j = 0; j < this.reels[i].children.length; j++) {
                    const s = this.reels[i].children[j];
                    if (s.y < -30) {
                        goDown = true;
                    }

                    if (goDown) {
                        s.y += delta * 2;
                    } else {
                        s.y -= delta * 2;
                    }
                }
            }
        });
    };
}
