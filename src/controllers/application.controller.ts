import { Container, Sprite } from "pixi.js";
import { ApplicationView } from "../views/application.view";

class ApplicationController {
    private appView: ApplicationView;

    constructor() {
        this.appView = new ApplicationView();
    }

    loadAssets = async () => {
        await this.appView.loadAssets();
    };

    addChild = (child: Container | Sprite) => {
        this.appView.addChild(child);
    };

    start = () => {
        this.appView.start();
    };

    getTicker = () => {
        return this.appView.ticker;
    };
}

export default ApplicationController;
