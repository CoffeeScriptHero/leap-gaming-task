import { Container } from "pixi.js";
import { StatisticsInterface } from "../models/statistics.model";
import Field from "../classes/field";
import BetButton from "../classes/bet-button";

class StatisticsView extends Container {
    private statisticModel: StatisticsInterface;
    private fields: Field[];
    private buttons: BetButton[];

    constructor(statisticModel: StatisticsInterface) {
        super();
        this.fields = [];
        this.buttons = [];
        this.statisticModel = statisticModel;
        this.createFields();
        this.createButtons(statisticModel.values.bet);
        this.x = statisticModel.pos.x;
        this.y = statisticModel.pos.y;
    }

    private createFields = () => {
        const { textures, values, textStyle } = this.statisticModel;
        const keys = Object.keys(values);

        for (let i = 0; i < textures.length; i++) {
            const field = new Field(textures[i], i, values[keys[i] as keyof typeof values], textStyle);
            this.fields.push(field);
            this.addChild(field);
        }
    };

    private createButtons = (bet: number) => {
        const plusButton = new BetButton("plus-button", 50, 50, 100, 325, bet, this.changeBet);
        const minusButton = new BetButton("minus-button", 50, 50, 160, 325, bet, this.changeBet);

        this.buttons.push(plusButton, minusButton);

        this.addChild(plusButton, minusButton);
    };

    changeBet = (bet: number, button: BetButton) => {
        const oldBet = this.statisticModel.values.bet;

        this.buttons.find((b) => !b.interactive)?.toggleButtonState();

        if ((oldBet === 40 && bet < 0) || (oldBet === 180 && bet > 0)) {
            button.toggleButtonState();
        }

        const newBet = oldBet + bet;
        localStorage.setItem("bet", JSON.stringify(newBet));
        this.statisticModel.values.bet = newBet;

        this.fields.find((f) => f.getTextureType() === "bet")?.updateText(newBet);
    };

    getButtons = () => this.buttons;

    getStatistics = () => this;
}

export default StatisticsView;
