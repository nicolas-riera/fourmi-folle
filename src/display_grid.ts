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
                ctx.fillStyle = "#ff4757"; // Ant
            } else if (color === 1) {
                ctx.fillStyle = "#2f3542"; // Black
            } else {
                ctx.fillStyle = "#f1f2f6"; // White
            }

            ctx.fillRect(j * cellSize, i * cellSize, cellSize, cellSize);
        }
    }
}