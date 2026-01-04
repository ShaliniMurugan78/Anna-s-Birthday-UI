import React from 'react';
import { motion } from 'framer-motion';

const Particles = ({
    count = 20,
    color = "white",
    minSize = 2,
    maxSize = 4,
    speed = 10
}) => {
    const particles = Array.from({ length: count }).map((_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * (maxSize - minSize) + minSize,
        duration: Math.random() * speed + speed,
        delay: Math.random() * 5,
    }));

    return (
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 0 }}>
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    style={{
                        position: 'absolute',
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: particle.size,
                        height: particle.size,
                        backgroundColor: color,
                        borderRadius: '50%',
                        opacity: 0.6,
                        boxShadow: `0 0 ${particle.size * 2}px ${color}`,
                    }}
                    animate={{
                        y: [0, -100],
                        opacity: [0, 0.8, 0],
                    }}
                    transition={{
                        duration: particle.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: particle.delay,
                    }}
                />
            ))}
        </div>
    );
};

export default Particles;
