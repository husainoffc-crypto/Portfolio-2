import { useEffect, useRef } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import { CustomCursor } from "./components/CustomCursor";

function NoiseTexture() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 256;
    canvas.height = 256;

    const imageData = ctx.createImageData(256, 256);
    for (let i = 0; i < imageData.data.length; i += 4) {
      const v = Math.random() * 255;
      imageData.data[i] = v;
      imageData.data[i + 1] = v;
      imageData.data[i + 2] = v;
      imageData.data[i + 3] = 12;
    }
    ctx.putImageData(imageData, 0, 0);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] w-full h-full"
      style={{
        opacity: 0.4,
        mixBlendMode: "multiply",
        imageRendering: "pixelated",
        width: "100%",
        height: "100%",
      }}
    />
  );
}

export default function App() {
  return (
    <div
      className="relative min-h-screen"
      style={{
        background: "#FAF9F6",
        cursor: "none",
      }}
    >
      <CustomCursor />
      <NoiseTexture />
      <RouterProvider router={router} />
    </div>
  );
}
