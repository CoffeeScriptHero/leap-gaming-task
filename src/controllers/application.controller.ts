import { Container, Sprite } from "pixi.js";
import { ApplicationView } from "../views/application.view";

export class ApplicationController {
    private appView: ApplicationView;

    constructor(appView: ApplicationView) {
        this.appView = appView;
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
}
