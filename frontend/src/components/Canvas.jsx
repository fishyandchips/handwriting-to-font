import { useRef, useEffect } from "react";

const Canvas = ({rows, cols}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const dpi = window.devicePixelRatio || 1;

    const setCanvasSize = () => {
      const width = canvas.clientWidth;
      const height = canvas.clientHeight;

      canvas.width = width * dpi;
      canvas.height = height * dpi;

      ctx.scale(dpi, dpi);
    };

    setCanvasSize();

    const getPointerPosition = (e) => {
      const rect = canvas.getBoundingClientRect();
      return {
        x: (e.clientX - rect.left) * (canvas.width / rect.width) / dpi,
        y: (e.clientY - rect.top) * (canvas.height / rect.height) / dpi,
      };
    };

    let isDrawing = false;
    let lastX = 0;
    let lastY = 0;

    const drawDot = (e) => {
      isDrawing = true;
      drawCircle(e, true);
    };

    const drawCircle = (e, isFirst = false) => {
      if (!isDrawing || e.pressure === 0) return;

      const { x, y } = getPointerPosition(e);
      const radius = Math.max(1, e.pressure * 3);

      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fillStyle = "white";
      ctx.fill();

      if (!isFirst) {
        ctx.beginPath();
        ctx.lineWidth = radius * 2;
        ctx.lineCap = "round";
        ctx.strokeStyle = "white";
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(x, y);
        ctx.stroke();
      }

      lastX = x;
      lastY = y;
    };

    const stopDrawing = () => {
      isDrawing = false;
    };

    canvas.addEventListener("pointerdown", drawDot);
    canvas.addEventListener("pointermove", drawCircle);
    canvas.addEventListener("pointerup", stopDrawing);
  }, []);

  const canvasHeight = `calc(100% / ${rows})`;
  const canvasWidth = `calc(100% / ${cols})`;

  return (
    <canvas
      ref={canvasRef}
      className="bg-transparent opacity-100 z-[10] touch-none"
      style={{
        height: canvasHeight,
        width: canvasWidth,
      }}
    />
  );
};

export default Canvas;
