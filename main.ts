import { grid_filler } from "./src/grid_filler.ts";

export let grid_color: number[][] = grid_filler(); // White = 0, Black = 1

export let grid_ant_position: number[][] = grid_filler();
grid_ant_position[50][50] = 1;

