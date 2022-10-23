import { TextureSource } from "pixi.js";

export interface SymbolInterface {
    size: number;
    textures: TextureSource[]; // symbols textures
}

export const symbolModel: SymbolInterface = {
    size: 150,
    textures: ["apricot", "mushroom", "pineapple"],
};
