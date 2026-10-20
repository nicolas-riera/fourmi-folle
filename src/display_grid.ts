import { grid_ants_position, grid_color } from "../main.ts";

export function display_grid(canvas: HTMLCanvasElement) {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const cellSize = canvas.width / 100;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < 100; i++) {
        for (let j = 0; j < 100; j++) {
            const antDir = grid_ants_position[i][j];
            const color = grid_color[i][j];

            if (antDir !== 0) {
                ctx.fillStyle = "#000000"; // Ant
            } else  {
                ctx.fillStyle = selectColor(color);
            }

            ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
        }
    }
}

function selectColor(color: number) {
    switch (color) {
        case 0:
            return "#ffffff"; // White 
        case 1:
            return "#ff0000"; // Red 
        case 2:
            return "#0000ff"; // Blue
        case 3:
            return "#00ff00"; // Green 
        case 4:
            return "#ffff00"; // Yellow 
        case 5:
            return "#ff00ff"; // Magenta 
        case 6:
            return "#00ffff"; // Cyan 
        case 7:
            return "#ff8000"; // Orange 
        case 8:
            return "#8000ff"; // Purple
        default:
            return "#000000"; // Black 
    }
}