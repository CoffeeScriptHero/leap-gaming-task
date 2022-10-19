import { ReelsInterface } from "../models/reels.model";
import { Texture, Sprite, Container, Application, Ticker, Graphics } from "pixi.js";
import gsap from "gsap";

export class ReelsView extends Container {
    protected reels: Container[];
    protected isRunning: boolean;

    constructor(ticker: Ticker) {
        super();
        this.reels = [];
        this.isRunning = false;
    }

    createReels = (reels: ReelsInterface) => {
        const slotTextures = [Texture.from("apricot"), Texture.from("mushroom"), Texture.from("pineapple")];

        for (let i = 0; i < reels.number; i++) {
            const rc = new Container(); // reel container

            const posx = reels.pos.x + i * reels.width;
            const posy = reels.pos.y;

            rc.x = posx;
            rc.y = posy;
            rc.width = reels.width;
            rc.height = reels.height;
            this.addChild(rc);

            for (let j = 0; j < reels.rows; j++) {
                const symbol = new Sprite(slotTextures[j]);
                symbol.x = Math.round((reels.symbolSize - symbol.width) / 2);
                symbol.y = j * reels.symbolSize;

                rc.addChild(symbol);
            }

            this.reels.push(rc);
        }

        const mask = new Graphics();
        mask.beginFill(0x00);
        mask.drawRect(reels.pos.x, reels.pos.y - 10, reels.pos.x + reels.width * 2, reels.height + 40);
        mask.endFill();

        this.mask = mask;

        return this;
    };

    setRunning = () => {
        this.isRunning = true;
    };

    spin = (reels: ReelsInterface) => {
        for (let i = 0; i < this.reels.length; i++) {
            const r = this.reels[i]; // current reel
            const tl = gsap.timeline({});
            tl.to(r, { y: r.y - 30, delay: i / 10 });
            tl.to(r, { y: 600 });
            // tl.fromTo(r, { y: 170, delay: 3 }, { y: 255, delay: 0 });
        }
    };
}
