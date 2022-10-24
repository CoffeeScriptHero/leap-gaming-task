import { Texture } from "pixi.js";
import StatisticsView from "../views/statistics.view";
import { statisticsModel, StatisticsInterface } from "../models/statistics.model";

class StatisticsController {
    private statisticsView: StatisticsView;

    constructor() {
        this.statisticsView = new StatisticsView(statisticsModel);
    }

    getStatistics = () => {
        return this.statisticsView.getStatistics();
    };

    toggleBetButtonsState = () => {
        const buttons = this.statisticsView.getButtons();
        buttons.forEach((b) => b.toggleButtonState());
    };
}

export default StatisticsController;
