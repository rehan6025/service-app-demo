import { useRef, useEffect } from "react";

interface SquaresProps {
  direction?: "diagonal" | "up" | "right" | "down" | "left";
  speed?: number;
  borderColor?: string;
  hoverFillColor?: string;
  squareSize?: number;
  className?: string;
}

interface HoveredSquare {
  col: number;
  row: number;
  opacity: number;
}

export function Squares({
  direction = "diagonal",
  speed = 0.4,
  borderColor = "rgba(13, 92, 77, 0.06)",
  hoverFillColor = "rgba(13, 92, 77, 0.12)",
  squareSize = 44,
  className = "",
}: SquaresProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const requestRef = useRef<number | null>(null);
  const gridOffset = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const hoveredSquaresRef = useRef<HoveredSquare[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      width = canvas.offsetWidth;
      height = canvas.offsetHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Grid offsets for continuous smooth motion
      const startX = Math.floor(gridOffset.current.x / squareSize);
      const startY = Math.floor(gridOffset.current.y / squareSize);
      const numCols = Math.ceil(width / squareSize) + 2;
      const numRows = Math.ceil(height / squareSize) + 2;

      // Draw active hover trails
      hoveredSquaresRef.current = hoveredSquaresRef.current
        .map((item) => ({ ...item, opacity: item.opacity - 0.025 }))
        .filter((item) => item.opacity > 0);

      // Draw hovered tiles with fading emerald highlight
      for (const hovered of hoveredSquaresRef.current) {
        const sqX = (hovered.col - startX) * squareSize - (gridOffset.current.x % squareSize);
        const sqY = (hovered.row - startY) * squareSize - (gridOffset.current.y % squareSize);

        ctx.fillStyle = `rgba(13, 92, 77, ${0.14 * hovered.opacity})`;
        ctx.fillRect(sqX, sqY, squareSize, squareSize);
      }

      // Draw subtle grid lines
      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 1;

      for (let col = 0; col < numCols; col++) {
        for (let row = 0; row < numRows; row++) {
          const sqX = col * squareSize - (gridOffset.current.x % squareSize);
          const sqY = row * squareSize - (gridOffset.current.y % squareSize);
          ctx.strokeRect(sqX, sqY, squareSize, squareSize);
        }
      }

      // Progress movement along chosen direction
      switch (direction) {
        case "right":
          gridOffset.current.x = (gridOffset.current.x - speed + squareSize) % squareSize;
          break;
        case "left":
          gridOffset.current.x = (gridOffset.current.x + speed + squareSize) % squareSize;
          break;
        case "up":
          gridOffset.current.y = (gridOffset.current.y + speed + squareSize) % squareSize;
          break;
        case "down":
          gridOffset.current.y = (gridOffset.current.y - speed + squareSize) % squareSize;
          break;
        case "diagonal":
        default:
          gridOffset.current.x = (gridOffset.current.x - speed + squareSize) % squareSize;
          gridOffset.current.y = (gridOffset.current.y - speed + squareSize) % squareSize;
          break;
      }

      requestRef.current = requestAnimationFrame(draw);
    };

    requestRef.current = requestAnimationFrame(draw);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      if (mouseX < 0 || mouseX > width || mouseY < 0 || mouseY > height) return;

      const startX = Math.floor(gridOffset.current.x / squareSize);
      const startY = Math.floor(gridOffset.current.y / squareSize);

      const col = Math.floor((mouseX + (gridOffset.current.x % squareSize)) / squareSize) + startX;
      const row = Math.floor((mouseY + (gridOffset.current.y % squareSize)) / squareSize) + startY;

      const existingIndex = hoveredSquaresRef.current.findIndex(
        (item) => item.col === col && item.row === row
      );

      if (existingIndex >= 0) {
        hoveredSquaresRef.current[existingIndex].opacity = 1;
      } else {
        hoveredSquaresRef.current.push({ col, row, opacity: 1 });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [direction, speed, borderColor, hoverFillColor, squareSize]);

  return (
    <canvas
      ref={canvasRef}
      className={`w-full h-full pointer-events-none block ${className}`}
    />
  );
}
