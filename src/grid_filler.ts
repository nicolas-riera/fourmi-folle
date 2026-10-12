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

