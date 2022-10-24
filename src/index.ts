import "./style.css";

import ApplicationController from "./controllers/application.controller";
import ReelsController from "./controllers/reels.controller";
import SpinButtonController from "./controllers/spin-button.controller";

window.onload = async () => {
    const app = new ApplicationController();
    await app.loadAssets();

    const reels = new ReelsController();
    app.addChild(reels.createReels());

    const spinButton = new SpinButtonController();

    app.addChild(spinButton.getButton());

    spinButton.handleClick(reels.spin);
    app.start();
};
