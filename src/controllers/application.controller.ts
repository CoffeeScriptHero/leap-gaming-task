import { Container, Sprite } from "pixi.js";
import { ApplicationView } from "../views/application.view";
import { appConfig } from "../models/application.model";

class ApplicationController {
    private appView: ApplicationView;

    constructor() {
        this.appView = new ApplicationView(appConfig);
    }

    loadAssets = async () => {
        await this.appView.loadAssets();
    };

    addChild = (child: Container | Sprite) => {
        this.appView.addChild(child);
    };

    getTicker = () => {
        return this.appView.ticker;
    };
}

export default ApplicationController;
