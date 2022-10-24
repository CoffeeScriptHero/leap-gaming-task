import { ReelsInterface } from "../models/reels.model";
import { SymbolInterface } from "../models/symbol.model";
import { Container, Graphics, Sprite } from "pixi.js";

import Reel from "./reel.view";

import gsap from "gsap";

class ReelsView extends Container {
    private reelsModel: ReelsInterface;
    private symbolModel: SymbolInterface;
    private reels: Container[];

    constructor(reelsModel: ReelsInterface, symbolModel: SymbolInterface) {
        super();
        this.reels = [];
        this.reelsModel = reelsModel;
        this.symbolModel = symbolModel;
    }

    createReels = () => {
        const { number, pos, width, height, rows } = this.reelsModel;
        const { textures, size } = this.symbolModel;

        for (let i = 0; i < number; i++) {
            const reel = new Reel(i, pos, width, height, rows, textures);
            this.addChild(reel);
            this.reels.push(reel);
        }

        const mask = new Graphics();
        mask.beginFill(0x00);
        mask.drawRect(pos.x - 5, pos.y + size - 30, pos.x + width * 2, height);
        mask.endFill();
        this.mask = mask;

        return this;
    };

    spin = async () => {
        let promises = [];
        for (let i = 0; i < this.reels.length; i++) {
            await this.delay(100);
            promises.push(this.animate(this.reels[i]));
        }
        const promise = await Promise.all(promises);
        await this.checkWinLines();
        return promise;
    };

    private animate = (reel: Container) => {
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
                        let diff = newY - symbol.y;
                        if (newY < symbol.y && diff < -100) {
                            symbol.setRandomTexture();
                        }
                        symbol.setY(newY);
                        return newY;
                    },
                },
            });
            promises.push(animation);
        }
        return Promise.all(promises);
    };

    private delay = (ms: number) => {
        return new Promise((res) => setTimeout(res, ms));
    };

    private checkWinLines = async () => {
        let promises = [];

        for (let col = 0; col < this.reels.length; col++) {
            const reel = this.reels[col];
            let [colCombination, rowCombination] = this.checkCombination(reel, col);

            for (let row = 1; row < reel.children.length - 1; row++) {
                if (colCombination) {
                    promises.push(this.highlightSymbol(reel.children[row]));
                }

                if (rowCombination) {
                    promises.push(this.highlightSymbol(this.reels[row - 1].children[col + 1]));
                }
            }
        }

        await Promise.all(promises);
    };

    private checkCombination = (reel: Reel, col: number) => {
        let colCombination = true;
        let rowCombination = true;

        for (let row = 1; row < reel.children.length - 2; row++) {
            if (reel.children[row].texture !== reel.children[row + 1].texture && colCombination) {
                // [col] reel, checks column combination. if next symbol texture's
                // different from current, and colCombination is not false yet, then:
                colCombination = false;
            }

            if (
                this.reels[row - 1].children[col + 1].texture !== this.reels[row].children[col + 1].texture &&
                rowCombination
            ) {
                // same, but checks row combination in a row ([col + 1] symbol, it doesnt check hidden rows)
                rowCombination = false;
            }
        }

        return [colCombination, rowCombination];
    };

    private highlightSymbol = (symbol: Symbol) => {
        const tl = gsap.timeline();
        return tl
            .to(symbol.scale, {
                x: 1.2,
                y: 1.2,
                duration: 1,
            })
            .to(symbol.scale, {
                x: 1.0,
                y: 1.0,
                duration: 1,
            });
    };
}

export default ReelsView;
