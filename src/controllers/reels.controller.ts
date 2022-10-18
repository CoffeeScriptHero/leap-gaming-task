import { ReelsView } from "../views/reels.view";
import { Reels } from "../models/reels.model";

export class ReelsController {
    private reelsView: ReelsView;
    private reels: Reels;

    constructor(reelsView: ReelsView, reels: Reels) {
        this.reelsView = reelsView;
        this.reels = reels;
    }

    createReels = () => {
        const a = this.reelsView.createReels(this.reels);
        console.log(a.x, a.width);

        return a;
    };

    setRunning = () => {
        this.reelsView.setRunning();
    };
}
