import { grid_ants_position } from "../main"

export function grid_filler() {
    let grid: number[][] = []
    for (let i = 0; i < 100; i++ ) {
        let inner_grid: number[] = []
        for (let j = 0; j < 100; j++ ) {
            inner_grid.push(0)
        }
    grid.push(inner_grid)
    }
    return grid
}

export function place_ants() {
    grid_ants_position[25][25] = 1;
    grid_ants_position[25][75] = 5;
    grid_ants_position[45][45] = 9;
    grid_ants_position[50][50] = 13;
    grid_ants_position[55][55] = 17;
    grid_ants_position[75][25] = 21;
    grid_ants_position[75][75] = 25;
}

export function getRandomIntInclusive(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}