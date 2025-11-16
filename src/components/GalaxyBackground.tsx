import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const GalaxyBackground = () => {
  return (
    <Canvas
      className="absolute inset-0"
      camera={{ position: [1, 1, 1] }}
    >
      <Stars
        radius={300}
        depth={90}
        count={700000}
        factor={8}
        saturation={2}
        fade
        speed={8}
      />
    </Canvas>
  );
};

export default GalaxyBackground;
