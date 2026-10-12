# Fourmi Folle

A high-performance, browser-based implementation of Langton's Ant featuring multiple ants, collision handling, and real-time step tracking, built with TypeScript and HTML5 Canvas.

## Project Structure

```text
fourmi-folle/
├── .github/
│   └── workflows/
│       └── deploy.yml        # CI/CD deployment configuration
├── src/
│   ├── display_grid.ts       # Canvas rendering logic
│   ├── grid_filler.ts        # Initial grid setup utilities
│   ├── move_algo.ts          # Ant movement, rotation, and collision logic
│   └── tools.ts              # Helper functions and utilities
├── .gitignore                # Git ignore rules
├── index.html                # Main HTML wrapper and canvas container
├── main.ts                   # Application entry point and game loop
├── package.json              # Project dependencies and scripts
├── package-lock.json         # Locked dependency versions
├── tsconfig.json             # TypeScript compiler options
└── vite.config.ts            # Vite bundler configuration
```

## Getting Started

You can access [https://nicolas-riera.github.io/fourmi-folle/](https://nicolas-riera.github.io/fourmi-folle/) or follow the following to run it locally :

### Prerequisites

Make sure you have Node.js installed on your machine.

### Installation & Execution

1. Clone or download the repository.
2. Install dependencies:

```Bash
npm install
```

3. Start the development server using Vite:

```Bash
npx vite
```

4. Open the local URL provided by Vite (typically http://localhost:5173) in your browser to view the simulation.
