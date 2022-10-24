import { TextStyle, TextureSource } from "pixi.js";

export interface StatisticsInterface {
    values: {
        balance: number;
        prize: number;
        bet: number;
    };
    betStep: number;
    pos: { x: number; y: number };
    textures: TextureSource[]; // fields textures
    textStyle: TextStyle;
}

export const statisticsModel: StatisticsInterface = {
    values: {
        balance: parseInt(localStorage.getItem("balance") || "") || 1000000,
        prize: 0,
        bet: parseInt(localStorage.getItem("bet") || "") || 20,
    },
    betStep: 20,
    pos: { x: 1360, y: 300 },
    textures: ["credits", "prize", "bet"],
    textStyle: new TextStyle({
        fontFamily: "Comic Sans MS",
        dropShadow: true,
        dropShadowAlpha: 0.8,
        dropShadowAngle: 2.1,
        dropShadowBlur: 4,
        dropShadowColor: "0x111111",
        dropShadowDistance: 10,
        fill: ["#ffffff"],
        stroke: "#D19E43",
        fontSize: 27,
        fontWeight: "lighter",
        lineJoin: "round",
        strokeThickness: 6,
    }),
};
