import React, { useEffect, useRef } from 'react';
import { ROW_SIZE } from '../grid-utils';

const CANVAS_HEIGHT = 500;
const CANVAS_WIDTH = 500;
const CELL_SIZE = CANVAS_WIDTH / ROW_SIZE;

const Grid = ({ cells }) => {
  const canvasRef = useRef();

  const drawGrid = ctx => {
    ctx.strokeStyle = '#333';

    for (let i = 0; i < cells.length; i++) {
      for (let j = 0; j < cells.length; j++) {
        const status = cells[i][j];

        if (status === 'ALIVE') {
          ctx.fillStyle = 'black';
          ctx.fillRect(i * CELL_SIZE, j * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        } else {
          ctx.fillStyle = 'white';
          ctx.fillRect(i * CELL_SIZE, j * CELL_SIZE, CELL_SIZE, CELL_SIZE);
        }
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
