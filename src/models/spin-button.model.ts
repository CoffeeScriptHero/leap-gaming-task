import { Filter, filters } from "pixi.js";

export interface SpinButtonDto {
    alphaFilter: Filter;
}

export class SpinButton {
    public alphaFilter: Filter;

    constructor(
        { alphaFilter }: SpinButtonDto = {
            alphaFilter: new filters.AlphaFilter(0.7),
        },
    ) {
        this.alphaFilter = alphaFilter;
    }
}
