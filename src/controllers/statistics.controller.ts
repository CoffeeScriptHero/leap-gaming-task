import StatisticsView from "../views/statistics.view";
import { statisticsModel } from "../models/statistics.model";

class StatisticsController {
    private statisticsView: StatisticsView;

    constructor() {
        this.statisticsView = new StatisticsView(statisticsModel);
    }

    getStatistics = () => {
        return this.statisticsView.getStatistics();
    };

    updateStatistics = (coeff?: number) => {
        const bet = statisticsModel.values.bet;
        const buttons = this.statisticsView.getButtons();

        buttons.forEach((b) => {
            if (coeff) {
                if (!b.checkToDisable(bet)) b.toggleButtonState();
            } else {
                if (b.interactive) b.toggleButtonState();
            }
        });

        if (coeff) {
            if (coeff < 0) return;
            let prize = 0;
            for (let i = 1; i <= coeff; i++) {
                prize += (bet / 100) * 40 * i;
                // ordinary formula for calculating the prize. each iteration = 40% from bet * i
            }
            this.statisticsView.changePrize(prize);
            this.statisticsView.changeBalance(prize);
        } else {
            this.statisticsView.changePrize(0);
            this.statisticsView.changeBalance(-bet);
        }
    };
}

export default StatisticsController;
