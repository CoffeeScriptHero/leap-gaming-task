export interface ReelsDto {
    number: number; // number of reels
    rows: number; // number of rows
    width: number; // each reel width
    symbolSize: number; // symbol size
}

export class Reels {
    public number: number;
    public rows: number;
    public width: number;
    public symbolSize: number;

    constructor(
        { number, rows, width, symbolSize }: ReelsDto = {
            number: 3,
            rows: 3,
            width: 250,
            symbolSize: 150,
        },
    ) {
        this.number = number;
        this.rows = rows;
        this.width = width;
        this.symbolSize = symbolSize;
    }
}
