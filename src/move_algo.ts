import { grid_ant_position, grid_color } from "../main";

export function move_ant() {
    let ant_positon: number[] = get_ant_position(grid_ant_position);
    
    if (grid_color[ant_positon[0]][ant_positon[1]] = 0) {
        // White 

    } else {
        // Black

    }

}

function get_ant_position(grid_ant_position: number[][]) {
    for (let i = 0; i < 100; i++ ) {
        for (let j = 0; j < 100; j++ ) {
            if (grid_ant_position[i][j] != 0) {
                return [i, j];
            }
        }
    }
    return [0, 0]
}