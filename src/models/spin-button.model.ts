import { Filter, filters } from "pixi.js";

export interface SpinButtonInterface {
    alphaFilter: Filter;
}

export const spinButtonModel: SpinButtonInterface = {
    alphaFilter: new filters.AlphaFilter(0.7),
};
