import { display_grid } from "./src/display_grid.ts";
import { grid_filler, place_ants } from "./src/tools.ts";
import { move_algo } from "./src/move_algo.ts";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const canvas = document.getElementById("gridCanvas") as HTMLCanvasElement;

export let grid_color: number[][] = grid_filler(); // 0 = White, 1 = Black

export let grid_ants_position: number[][] = grid_filler(); // 0 = Up, 1 = Right, 2 = Down, 3 = Left
place_ants()

grid_ants_position[50][50] = 1; 

export let step_counter = 0;

async function run() {
    for (let i = 0; i < 100000; i++) {
        move_algo();
        display_grid(canvas);
        step_counter += 1;
        await sleep(1); 
    }
}

run();