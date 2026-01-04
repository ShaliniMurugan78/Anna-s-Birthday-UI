import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Particles from '../components/Particles';
import Polaroid from '../components/Polaroid';
import HugButton from '../components/HugButton';
import memory1 from '../assets/images/memory1.jpg';
import memory2 from '../assets/images/memory2.jpg';
import memory3 from '../assets/images/memory3.jpg';

const Memories = ({ onNext }) => {
    const [showHug, setShowHug] = useState(false);
    const [showNav, setShowNav] = useState(false);

    useEffect(() => {
        const timer1 = setTimeout(() => setShowHug(true), 3000);
        const timer2 = setTimeout(() => setShowNav(true), 5000);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
        };
    }, []);

    // Placeholder image URLs
    const polaroidImages = [
        memory1,
        memory2,
        memory3
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, x: -100, transition: { duration: 0.8 } }}
            style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(135deg, #fdfbf7 0%, #e6e6fa 100%)', // Cream to soft lavender
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}
        >
            <Particles count={20} color="#b19cd9" speed={5} />

            {/* Polaroids Container */}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                gap: '20px',
                marginBottom: '40px',
                maxWidth: '1000px',
                zIndex: 10
            }}>
                <Polaroid
                    image={polaroidImages[0]}
                    caption="My safe place 💙"
                    rotation={-5}
                    delay={0.5}
                />
                <Polaroid
                    image={polaroidImages[1]}
                    caption="Forever my brother"
                    rotation={3}
                    delay={1.2}
                />
                <Polaroid
                    image={polaroidImages[2]}
                    caption="Chosen by heart 🥹"
                    rotation={-2}
                    delay={1.9}
                />
            </div>

            <div style={{ height: '120px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
                {showHug && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                    >
                        <HugButton />
                        <p style={{ fontFamily: 'var(--font-quote)', color: '#555', marginTop: '10px' }}>
                            Always grateful for you.
                        </p>
                    </motion.div>
                )}
            </div>

            {/* Navigation Button */}
            <AnimatePresence>
                {showNav && (
                    <motion.button
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        onClick={onNext}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        style={{
                            marginTop: '20px',
                            padding: '12px 30px',
                            border: '1px solid #d4af37',
                            borderRadius: '30px',
                            color: '#d4af37', // Gold text
                            fontSize: '1rem',
                            fontFamily: 'var(--font-title)',
                            letterSpacing: '1px',
                            boxShadow: '0 4px 10px rgba(212, 175, 55, 0.2)',
                            zIndex: 20,
                            position: 'absolute',
                            bottom: '30px'
                        }}
                    >
                        One Last Message ➜
                    </motion.button>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default Memories;
