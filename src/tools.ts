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

export function getAntsStatsPercentage(grid_color: number[][]): string {
    const totalCells = grid_color.length * grid_color[0].length;
    const counts: { [key: number]: number } = {};

    for (let r = 0; r < grid_color.length; r++) {
        for (let c = 0; c < grid_color[r].length; c++) {
            const val = grid_color[r][c];
            counts[val] = (counts[val] || 0) + 1;
        }
    }

    // Ant with the most colored cells
    let maxId = -1;
    let maxCount = -1;

    for (const [idStr, count] of Object.entries(counts)) {
        const id = Number(idStr);
        if (id !== 0 && count > maxCount) {
            maxCount = count;
            maxId = id;
        }
    }

    const results: string[] = [];
    const sortedIds = Object.keys(counts).map(Number).filter(id => id > 0).sort((a, b) => a - b);

    for (const antId of sortedIds) {
        const percentage = ((counts[antId] / totalCells) * 100).toFixed(2);
        const text = `Ants ${antId} : ${percentage}%`;

        if (antId === maxId) {
            results.push(`<b>${text}</b>`);
        } else {
            results.push(text);
        }
    }

    return results.join(", ");
}