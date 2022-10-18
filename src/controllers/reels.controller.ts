import { ReelsView } from "../views/reels.view";
import { Reels } from "../models/reels.model";
import { Ticker } from "pixi.js";

export class ReelsController {
    constructor(private reelsView: ReelsView, private reels: Reels) {}

    createReels = () => {
        return this.reelsView.createReels(this.reels);
    };

    spin = (ticker: Ticker) => {
        this.reelsView.spin(ticker);
    };
}
