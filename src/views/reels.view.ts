import { ReelsInterface, reelsModel } from "../models/reels.model";
import { Texture, Sprite, Container, Graphics, TextureSource } from "pixi.js";
import Symbol from "./symbol.view";

import { symbolModel } from "../models/symbol.model";

import { getRandomNum } from "../helpers/random";
import gsap from "gsap";

export class ReelsView extends Container {
    protected reels: Container[];

    constructor() {
        super();
        this.reels = [];
    }

    createReels = (reels: ReelsInterface) => {
        const { number, width, height, rows, pos } = reels;
        const { textures } = symbolModel;

        for (let i = 0; i < number; i++) {
            const rc = new Container(); // reel container

            const posx = pos.x + i * width;
            const posy = pos.y;

            rc.x = posx;
            rc.y = posy;
            rc.width = width;
            rc.height = height;
            this.addChild(rc);

            for (let j = 0; j < rows + 2; j++) {
                const index = j === 0 || j > rows ? getRandomNum(0, textures.length) : j - 1;
                const texture = Texture.from(textures[index]);
                const symbol = new Symbol(texture, j);
                rc.addChild(symbol);
            }

            this.reels.push(rc);
        }

        const mask = new Graphics();
        mask.beginFill(0x00);
        mask.drawRect(reels.pos.x, reels.pos.y - 30, reels.pos.x + reels.width * 2, reels.height);
        mask.endFill();

        // this.mask = mask;

        return this;
    };

    sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    animate = async (reel, i) => {
        let promises = [];
        console.log(`---------------REEL ${i} START---------------`);
        for (let j = 0; j < reel.children.length; j++) {
            const symbol = reel.children[j];
            let defaultY = reel.children[j].y;

            let animation = gsap.to(symbol, {
                duration: 1.25,
                y: `+=7500`,
                ease: "back.inOut(0.7)",
                modifiers: {
                    y(y) {
                        console.log(`parseFloat(${y}) % 800 = ${parseFloat(y) % 800}`);
                        let newY = (parseFloat(y) % 750) - reelsModel.symbolSize;
                        let diff = newY - defaultY;
                        // if (newY < defaultY && diff < -150) {
                        //     symbol.setRandomTexture();
                        // }
                        return newY;
                    },
                },
            });
            promises.push(animation);
        }
        console.log(`---------------REEL ${i} END---------------`);
        return Promise.all(promises);
    };

    spin = async () => {
        for (let i = 0; i < this.reels.length; i++) {
            await this.animate(this.reels[i], i);
        }
    };
}
