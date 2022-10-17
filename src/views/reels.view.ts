import { Reels } from "../models/reels.model";
import { Texture, Sprite, Container } from "pixi.js";

export class ReelsView {
    createReels = (reels: Reels) => {
        const container = new Container();

        const slotTextures = [Texture.from("apricot"), Texture.from("mushroom"), Texture.from("pineapple")];

        for (let i = 0; i < reels.number; i++) {
            const reelContainer = new Container();
            reelContainer.x = i * reels.width;
            container.addChild(reelContainer);

            for (let j = 0; j < reels.rows; j++) {
                const symbol = new Sprite(slotTextures[j]);
                symbol.x = Math.round((reels.symbolSize - symbol.width) / 2);
                symbol.y = j * reels.symbolSize;
                reelContainer.addChild(symbol);
            }
        }

        container.x = window.innerWidth / 2;
        container.y = window.innerHeight / 2;
        container.pivot.x = container.width / 2;
        container.pivot.y = container.height / 2;

        return container;
    };
}
