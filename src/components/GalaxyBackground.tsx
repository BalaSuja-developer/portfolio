import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";

const GalaxyBackground = () => {
  return (
    <Canvas
      className="absolute inset-0"
      camera={{ position: [0, 0, 1] }}
    >
      <Stars
        radius={120}
        depth={80}
        count={7000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
    </Canvas>
  );
};

export default GalaxyBackground;
