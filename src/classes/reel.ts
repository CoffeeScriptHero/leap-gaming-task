import { Container, Texture, TextureSource } from "pixi.js";
import Symbol from "./symbol";

class Reel extends Container {
    constructor(
        reelNumber: number,
        pos: { x: number; y: number },
        width: number,
        height: number,
        rows: number,
        textures: TextureSource[],
    ) {
        super();
        this.x = pos.x + reelNumber * width;
        this.y = pos.y;
        this.setSize(width, height);
        this.createSymbols(rows, textures);
    }

    setSize = (width: number, height: number) => {
        this.width = width;
        this.height = height;
    };

    private createSymbols = (rows: number, textures: TextureSource[]) => {
        // 2 extra hidden rows, one at the top and one at the bottom
        for (let j = 0; j < rows + 2; j++) {
            // if it is one of the hidden rows, then symbol texture will be random
            const index = j === 0 || j > rows ? this.getRandomNum(0, textures.length) : j - 1;
            const texture = Texture.from(textures[index]);
            const symbol = new Symbol(texture, j);
            this.addChild(symbol);
        }
    };

    private getRandomNum = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min) + min);
    };
}

export default Reel;
