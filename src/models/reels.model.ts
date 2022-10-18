export interface ReelsDto {
    number: number; // number of reels
    rows: number; // number of rows
    width: number; // each reel width
    symbolSize: number; // symbol size
    pos: { x: number; y: number };
}

export class Reels {
    public number: number;
    public rows: number;
    public width: number;
    public symbolSize: number;
    public pos: { x: number; y: number };

    constructor(
        { number, rows, width, symbolSize, pos }: ReelsDto = {
            number: 3,
            rows: 3,
            width: 250,
            symbolSize: 150,
            pos: { x: 620, y: 265 },
        },
    ) {
        this.number = number;
        this.rows = rows;
        this.width = width;
        this.symbolSize = symbolSize;
        this.pos = pos;
    }
}
