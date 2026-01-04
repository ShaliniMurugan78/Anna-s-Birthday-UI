import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Particles from '../components/Particles';
import HugButton from '../components/HugButton';

const SoulConnection = ({ onNext }) => {
    const [showHug, setShowHug] = useState(false);

    // Staggered text animation
    const textVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i) => ({
            opacity: 1,
            y: 0,
            transition: { delay: i * 1.5 + 2, duration: 1 }
        })
    };

    const handleHug = () => {
        // Wait a bit after hug then transition
        setTimeout(() => {
            onNext();
        }, 1500);
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.5 } }}
            style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to bottom, #141e30, #243b55)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                textAlign: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}
            onAnimationComplete={() => setShowHug(true)}
        >
            <Particles count={30} color="#4a90e2" minSize={1} maxSize={3} speed={20} />

            {/* Magic line animation */}
            <svg style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, pointerEvents: 'none' }}>
                <motion.path
                    d="M 0,300 C 150,300 150,150 300,150 C 450,150 450,450 600,450" // Simplified wavy line, ideally responsive
                    fill="none"
                    stroke="rgba(255, 215, 0, 0.2)"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 3, ease: "easeInOut" }}
                />
            </svg>

            <motion.div style={{ zIndex: 10, maxWidth: '600px' }}>
                <motion.h2
                    custom={0}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '1.8rem',
                        color: '#b3cdd1',
                        marginBottom: '20px',
                        lineHeight: '1.6'
                    }}
                >
                    "You are my non-blood brother, yet our souls are stitched together."
                </motion.h2>

                <motion.p
                    custom={1}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '1.5rem',
                        color: '#dbeafe',
                        marginBottom: '15px'
                    }}
                >
                    I love you, always.
                </motion.p>

                <motion.p
                    custom={2}
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '1.5rem',
                        color: '#dbeafe'
                    }}
                >
                    No matter where life takes you, I will always be there for you.
                </motion.p>

                {showHug && (
                    <HugButton onHug={handleHug} delay={7} />
                )}
            </motion.div>
        </motion.div>
    );
};

export default SoulConnection;
