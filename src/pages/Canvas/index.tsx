import { useEffect, useRef } from "react";
import "./index.scss";

export default function Canvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<any>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas && containerRef.current) {
      canvas.width = containerRef.current.clientWidth;
      canvas.height = containerRef.current.clientHeight;
    }
  }, []);
  return (
    <div className="canvas-wrapper" ref={containerRef}>
      <canvas id="canvas" ref={canvasRef}></canvas>
    </div>
  );
}
