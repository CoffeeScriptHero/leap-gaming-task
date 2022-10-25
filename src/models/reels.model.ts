export interface ReelsInterface {
    number: number; // number of reels
    rows: number; // number of rows
    width: number; // each reel width
    height: number; // each reel height
    pos: { x: number; y: number }; // where reels begin
}

export const reelsModel: ReelsInterface = {
    number: 3,
    rows: 3,
    width: 250,
    height: 485,
    pos: { x: 630, y: 105 },
};
