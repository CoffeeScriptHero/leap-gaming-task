import { ReelsView } from "../views/reels.view";
import { Reels } from "../models/reels.model";

export class ReelsController {
    constructor(private reelsView: ReelsView, private reels: Reels) {}

    createReels = () => {
        return this.reelsView.createReels(this.reels);
    };
}
