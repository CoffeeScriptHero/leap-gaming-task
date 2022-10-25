import ReelsView from "../views/reels.view";
import { reelsModel } from "../models/reels.model";
import { symbolModel } from "../models/symbol.model";

class ReelsController {
    private reelsView: ReelsView;

    constructor() {
        this.reelsView = new ReelsView(reelsModel, symbolModel);
    }

    getReels = () => this.reelsView;

    spin = () => this.reelsView.spin();
}

export default ReelsController;
