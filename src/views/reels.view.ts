import { ReelsInterface } from "../models/reels.model";
import { Texture, Container, Graphics } from "pixi.js";
import Reel from "./reel.view";

import { symbolModel } from "../models/symbol.model";

import gsap from "gsap";

export class ReelsView extends Container {
    protected reels: Container[];

    constructor() {
        super();
        this.reels = [];
    }

    createReels = (reelsModel: ReelsInterface) => {
        const { number, pos, width, height, rows } = reelsModel;
        const { textures } = symbolModel;

        for (let i = 0; i < number; i++) {
            const reel = new Reel(i, pos, width, height, rows, textures);
            this.addChild(reel);
            this.reels.push(reel);
        }

        const mask = new Graphics();
        mask.beginFill(0x00);
        mask.drawRect(pos.x - 5, pos.y + symbolModel.size - 30, pos.x + width * 2, height);
        mask.endFill();
        this.mask = mask;

        return this;
    };

    spin = async () => {
        for (let i = 0; i < this.reels.length; i++) {
            await this.delay(100);
            this.animate(this.reels[i]);
        }
    };

    private animate = async (reel: Reel) => {
        let promises = [];
        for (let j = 0; j < reel.children.length; j++) {
            let symbol = reel.children[j];
            let animation = gsap.to(reel.children[j], {
                duration: 1.25,
                y: `+=6750`,
                ease: "back.inOut(0.7)",
                modifiers: {
                    y(y, symbol) {
                        const newY = parseFloat(y) % 750;
                        let diff = newY - symbol.defaultY;
                        if (newY < symbol.defaultY && diff < -100) {
                            symbol.setRandomTexture();
                        }
                        symbol.defaultY = newY;
                        return newY;
                    },
                },
            });
            promises.push(animation);
        }
        return Promise.all(promises);
    };

    private delay(ms: number) {
        return new Promise((res) => setTimeout(res, ms));
    }
}
