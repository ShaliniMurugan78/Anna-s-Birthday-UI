import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Starfield from '../components/Starfield';

const emojis = ['🎉', '✨', '💙', '🎂'];

const FloatingEmojis = () => {
    return (
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 10 }}>
            {Array.from({ length: 15 }).map((_, i) => {
                const emoji = emojis[Math.floor(Math.random() * emojis.length)];
                return (
                    <motion.div
                        key={i}
                        initial={{
                            x: Math.random() * window.innerWidth,
                            y: window.innerHeight + 100,
                            opacity: 0
                        }}
                        animate={{
                            y: -100,
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear"
                        }}
                        style={{
                            position: 'absolute',
                            fontSize: Math.random() * 20 + 20 + 'px',
                        }}
                    >
                        {emoji}
                    </motion.div>
                )
            })}
        </div>
    );
};

const Opening = ({ onNext, playMusic }) => {
    const handleStart = () => {
        playMusic();
        onNext();
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
            style={{
                width: '100%',
                height: '100%',
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#050505' // Deep dark bg for stars
            }}
            onClick={handleStart}
        >
            <Starfield />
            <FloatingEmojis />

            <motion.h1
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                    scale: 1,
                    opacity: 1,
                    textShadow: [
                        "0 0 10px #4a90e2",
                        "0 0 20px #4a90e2",
                        "0 0 10px #4a90e2"
                    ]
                }}
                transition={{
                    duration: 2,
                    textShadow: { duration: 2, repeat: Infinity, repeatType: "reverse" }
                }}
                style={{
                    fontFamily: 'var(--font-title)',
                    fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                    color: 'white',
                    zIndex: 20,
                    textAlign: 'center',
                    cursor: 'pointer'
                }}
            >
                Happieeee Birthday, Anna 💙
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.5 }}
                transition={{ delay: 3, duration: 1 }}
                style={{
                    position: 'absolute',
                    bottom: '50px',
                    color: 'white',
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.2rem',
                    zIndex: 20
                }}
            >
                Tap anywhere to begin
            </motion.p>
        </motion.div>
    );
};

export default Opening;
