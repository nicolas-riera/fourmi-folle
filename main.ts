import { display_grid } from "./src/display_grid.ts";
import { grid_filler } from "./src/grid_filler.ts";
import { move_algo } from "./src/move_algo.ts";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const canvas = document.getElementById("gridCanvas") as HTMLCanvasElement;

export let grid_color: number[][] = grid_filler();

export let grid_ant_position: number[][] = grid_filler();
grid_ant_position[50][50] = 1;

async function run() {
    for (let i = 0; i < 10000; i++) {
        move_algo();
        display_grid(canvas);
        await sleep(10); 
    }
}

run();