import { ReelsView } from "../views/reels.view";
import { reelsModel } from "../models/reels.model";

export class ReelsController {
    private reelsView: ReelsView;
    private reels;

    constructor() {
        this.reelsView = new ReelsView();
        this.reels = reelsModel;
    }

    createReels = () => {
        return this.reelsView.createReels(this.reels);
    };

    spin = () => {
        this.reelsView.spin();
    };
}
