import React from "react";
import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particlesOptions from "../../constants/particles.json";

const ParticlesJSX = () => {
  const particlesInit = useCallback(async (main) => {
    await loadFull(main);
  }, []);
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={particlesOptions}
    />
  );
};

export default ParticlesJSX;
