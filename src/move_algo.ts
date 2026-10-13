import { grid_ants_position, grid_color, step_counter } from "../main.ts";
import { getRandomIntInclusive } from "./tools.ts"

export function move_algo() {
    let ants_position: number[][] = get_ants_position(grid_ants_position);

    for (let ant_position of ants_position) {
        custom_rule(ant_position);
    
        rotate_ant(ant_position, grid_color[ant_position[0]][ant_position[1]]) // 0 = Left, 1 = Right
        color_cell(ant_position)
        move_forward_ant(ant_position)
    }   
}

function get_ants_position(grid_ant_position: number[][]) {
    let list: number[][] = []
    for (let i = 0; i < 100; i++ ) {
        for (let j = 0; j < 100; j++ ) {
            if (grid_ant_position[i][j] != 0) {
                list.push([i, j])
            }
        }
    }
    return list
}

function rotate_ant(ant_position: number[], cell_color: number) {
    if (cell_color == 0) {
        if (grid_ants_position[ant_position[0]][ant_position[1]] != 4) {
            grid_ants_position[ant_position[0]][ant_position[1]] += 1
        } else
            grid_ants_position[ant_position[0]][ant_position[1]] = 1
    } else {
        if (grid_ants_position[ant_position[0]][ant_position[1]] != 1) {
            grid_ants_position[ant_position[0]][ant_position[1]] -= 1
        } else
            grid_ants_position[ant_position[0]][ant_position[1]] = 4
    }
    
}

function color_cell(ant_position: number[]) {
    if (grid_color[ant_position[0]][ant_position[1]] == 0) {
        grid_color[ant_position[0]][ant_position[1]] = 1
    } else if (grid_color[ant_position[0]][ant_position[1]] == 1) {
        grid_color[ant_position[0]][ant_position[1]] = 0
    }
}

function move_forward_ant(ant_position: number[]) {
    let direction = grid_ants_position[ant_position[0]][ant_position[1]];

    let row = ant_position[0];
    let col = ant_position[1];

    if (direction === 1) {
        row -= 1;
    } else if (direction === 2) {
        col += 1;
    } else if (direction === 3) {
        row += 1;
    } else if (direction === 4) {
        col -= 1;
    }

    if (row < 0) {
        row = 99;
    } else if (row >= 100) {
        row = 0;
    }

    if (col < 0) {
        col = 99;
    } else if (col >= 100) {
        col = 0;
    }

    if (grid_ants_position[row][col] != 0) { // Check if there's already an ant or not
        let current_row = ant_position[0];
        let current_col = ant_position[1];
        rotate_ant([current_row, current_col], grid_color[current_row][current_col]); 
        return;
    }

    grid_ants_position[ant_position[0]][ant_position[1]] = 0;

    ant_position[0] = row;
    ant_position[1] = col;

    grid_ants_position[ant_position[0]][ant_position[1]] = direction;
}

function custom_rule(ant_position: number[]) { // Randomly move the ant another time
    if (step_counter % getRandomIntInclusive(11, 97) == 0) { 
        move_forward_ant(ant_position); 
    }
}