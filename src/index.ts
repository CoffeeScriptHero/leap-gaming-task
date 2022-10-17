import "./style.css";

import { ApplicationController } from "./controllers/application.controller";
import { ReelsController } from "./controllers/reels.controller";
import { SpinButtonController } from "./controllers/spin-button.controller";

import { ApplicationView } from "./views/application.view";
import { ReelsView } from "./views/reels.view";
import { SpinButtonView } from "./views/spin-button.view";

import { Reels } from "./models/reels.model";
import { SpinButton } from "./models/spin-button.model";

const reelsConfig = {
    number: 3,
    rows: 3,
    width: 250,
    symbolSize: 150,
};

window.onload = async (): Promise<void> => {
    const app = new ApplicationController(new ApplicationView());
    await app.loadAssets();

    const reels = new ReelsController(new ReelsView(), new Reels(reelsConfig));
    app.addChild(reels.createReels());

    const spinButton = new SpinButtonController(new SpinButtonView(), new SpinButton());

    app.addChild(spinButton.generate());

    spinButton.handleClick();
    app.start();
};
