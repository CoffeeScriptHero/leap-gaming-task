import { ReelsInterface } from "../models/reels.model";
import { Texture, Sprite, Container, Graphics, TextureSource } from "pixi.js";

import { getRandomNum } from "../helpers/random";
import gsap from "gsap";

export class ReelsView extends Container {
    protected reels: Container[];
    protected isRunning: boolean;
    protected isBounced: boolean;

    constructor() {
        super();
        this.reels = [];
        this.isRunning = false;
        this.isBounced = false;
    }

    createReels = (reels: ReelsInterface) => {
        const { number, width, height, symbolSize, rows, pos, textures } = reels;

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
                const symbol = new Sprite(texture);
                symbol.x = Math.round((symbolSize - symbol.width) / 2);
                symbol.y = j * symbolSize - symbolSize;

                rc.addChild(symbol);
            }

            this.reels.push(rc);
        }

        const mask = new Graphics();
        mask.beginFill(0x00);
        mask.drawRect(reels.pos.x, reels.pos.y - 10, reels.pos.x + reels.width * 2, reels.height);
        mask.endFill();

        // this.mask = mask;

        return this;
    };

    setRunning = () => {
        this.isRunning = true;
    };

    spin = (reels: ReelsInterface) => {
        const { symbolSize, textures } = reels;

        this.moveLastRow(textures, symbolSize);

        for (let i = 0; i < this.children.length; i++) {
            const r = this.children[i];
            for (let j = 0; j < r.children.length; j++) {
                const s = r.children[j];
                gsap.to(s, {
                    y: s.y + symbolSize,
                });
            }
        }
    };

    private bounce = () => {
        for (let i = 0; i < this.children.length; i++) {
            const reel = this.children[i];
            for (let j = 0; j < reel.children.length; j++) {
                const symbol = reel.children[j];
                gsap.to(symbol, {
                    y: symbol.y - 30,
                    delay: i / 15,
                });
            }
        }
    };

    private moveLastRow = (textures: TextureSource[], symbolSize: number) => {
        let lastSymbols: Sprite[] = [];

        this.children.forEach((r) => lastSymbols.push(r.children.pop()));

        lastSymbols.forEach((s) => {
            s.texture = Texture.from(textures[getRandomNum(0, textures.length)]);
            s.y = -(symbolSize * 2);
            s.x = Math.round((symbolSize - s.width) / 2);
        });

        this.children.forEach((r, i) => r.children.unshift(lastSymbols[i]));
    };
}
