import React, { useEffect, useRef } from 'react';

const CELL_SIZE = 5;

const Grid = ({ cells }) => {
  const canvasRef = useRef();

  const drawGrid = ctx => {
    for (let i = 0; i < cells.length; i++) {
      for (let j = 0; j < cells[i].length; j++) {
        ctx.beginPath();
        ctx.fillStyle = cells[i][j] ? 'green' : 'white';
        ctx.fillRect(i * CELL_SIZE, j * CELL_SIZE, CELL_SIZE, CELL_SIZE);
      }
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    drawGrid(ctx);
  });

  return <canvas ref={canvasRef} width="700px" height="700px" />;
};

export default Grid;
