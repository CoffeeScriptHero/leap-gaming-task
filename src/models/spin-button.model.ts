import { appConfig } from "./application.model";

export interface SpinButtonInterface {
    width: number;
    height: number;
    pos: { x: number; y: number };
}

export const spinButtonModel: SpinButtonInterface = {
    width: appConfig.isDesktop ? 400 : 340,
    height: appConfig.isDesktop ? 150 : 125,
    pos: { x: window.innerWidth / 2, y: appConfig.isDesktop ? window.innerHeight - 70 : window.innerHeight - 60 },
};
