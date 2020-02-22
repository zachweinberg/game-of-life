import React, { useEffect, useRef } from 'react';

const CANVAS_HEIGHT = 600;
const CANVAS_WIDTH = 600;

const Grid = ({ cells }) => {
  const canvasRef = useRef();

  const drawGrid = ctx => {
    for (let i = 0; i < cells.length; i++) {
      for (let j = 0; j < cells[i].length; j++) {
        ctx.beginPath();
        ctx.fillStyle = cells[i][j] ? 'green' : 'white';
        const cellSize = CANVAS_HEIGHT / cells.length;
        ctx.fillRect(i * cellSize, j * cellSize, cellSize, cellSize);
      }
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    drawGrid(ctx);
  });

  return <canvas ref={canvasRef} width={`${CANVAS_WIDTH}px`} height={`${CANVAS_HEIGHT}px`} />;
};

export default Grid;
