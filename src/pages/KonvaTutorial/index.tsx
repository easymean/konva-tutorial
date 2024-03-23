import React, { useState } from "react";
import { Stage, Layer, Circle } from "react-konva";
import Konva from "konva";

type State = {
  isDragging: boolean;
  x: number;
  y: number;
};

export default function KonvaTutorial() {
  const [curState, setCurState] = useState<State>({
    isDragging: false,
    x: 50,
    y: 50,
  });
  const handleDragStart = () => {
    setCurState({ ...curState, isDragging: true });
  };
  const handleDragEnd = (e: Konva.KonvaEventObject<DragEvent>) => {
    setCurState({ isDragging: false, x: e.target.x(), y: e.target.y() });
  };

  const handleClick = () => {};
  return (
    <div className="konva-wrapper">
      <Stage width={window.innerWidth} height={window.innerHeight}>
        <Layer>
          <Circle
            x={curState.x}
            y={curState.y}
            radius={50}
            fill="green"
            draggable
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            onClick={handleClick}
          />
        </Layer>
      </Stage>
    </div>
  );
}
