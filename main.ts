import { display_grid } from "./src/display_grid.ts";
import { grid_filler, place_ants, getAntsStatsPercentage } from "./src/tools.ts";
import { move_algo } from "./src/move_algo.ts";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const canvas = document.getElementById("gridCanvas") as HTMLCanvasElement;
const counterElement = document.getElementById("counter") as HTMLElement;
const antStatsElement = document.getElementById("antStats") as HTMLElement;

export let grid_color: number[][] = grid_filler(); // 0 = White, 1 = Black

export let grid_ants_position: number[][] = grid_filler(); // Exemple : 1 = Up, 2 = Right, 3 = Down, 4 = Left ; Value = 4 * (n - 1) + 1
place_ants()

export let step_counter = 0;

async function run() {
    for (let i = 0; i < 100000; i++) {

        move_algo();

        display_grid(canvas);

        step_counter += 1;

        if (counterElement) {
            counterElement.textContent = step_counter.toString();
        }

        if (antStatsElement) {
            antStatsElement.innerHTML = getAntsStatsPercentage(grid_color);
        }
        
        await sleep(1); 
    }
}

run();