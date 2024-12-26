import { useCallback } from "react";
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import './Particle.scss';

export const Design = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine); // Load only required features
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        const canvas = container?.canvas?.element; // Access the canvas element
        if (canvas) {
            // Dynamically update inline styles
            canvas.style.position = "absolute";
            canvas.style.width = "100%";
            canvas.style.height = "100%";
            canvas.style.top = "0";
            canvas.style.left = "0";
            canvas.style.zIndex = "0";
        }
    }, []);

    return (
        <div className="Design">
                <Particles
                    id="tsparticles"
                    init={particlesInit}
                    loaded={particlesLoaded}
                    options={{
                        style: {
                            position: "absolute",
                            height: "100vh",
                        },
                        fpsLimit: 60,
                        interactivity: {
                            events: {
                                onClick: {
                                    enable: true,
                                    mode: "repulse",
                                },
                                onHover: {
                                    enable: true,
                                    mode: "repulse",
                                },
                            },
                            modes: {
                                repulse: {
                                    distance: 100,
                                    duration: 0.8,
                                },
                            },
                        },
                        particles: {
                            color: {
                                value: "#0ef",
                            },
                            links: {
                                color: "#0ef",
                                distance: 150,
                                enable: true,
                                opacity: 0.5,
                                width: 1,
                            },
                            move: {
                                direction: "none",
                                enable: true,
                                outModes: {
                                    default: "bounce",
                                },
                                random: false,
                                speed: 2,
                                straight: false,
                            },
                            number: {
                                density: {
                                    enable: true,
                                    area: 1200,
                                },
                                value: 40,
                            },
                            opacity: {
                                value: 0.5,
                            },
                            shape: {
                                type: "circle",
                            },
                            size: {
                                value: { min: 1, max: 2 },
                            },
                        },
                        detectRetina: true,
                    }}
                />
        </div>
    );
};
