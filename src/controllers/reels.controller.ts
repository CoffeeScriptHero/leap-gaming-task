import { ReelsView } from "../views/reels.view";
import { reelsModel } from "../models/reels.model";

export class ReelsController {
    private reelsView: ReelsView;
    private reels;

    constructor(reelsView: ReelsView) {
        this.reelsView = reelsView;
        this.reels = reelsModel;
    }

    createReels = () => {
        return this.reelsView.createReels(this.reels);
    };

    setRunning = () => {
        this.reelsView.setRunning();
    };

    spin = () => {
        this.reelsView.spin(this.reels);
    };
}
