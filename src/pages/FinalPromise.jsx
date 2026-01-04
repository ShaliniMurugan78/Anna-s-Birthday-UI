import React from 'react';
import { motion } from 'framer-motion';
import promise from '../assets/images/promise.jpg';
import Particles from '../components/Particles';

const FinalPromise = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(to bottom, #fdfbf7, #fff)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '20px',
                textAlign: 'center'
            }}
        >
            <Particles count={15} color="#ffd700" speed={15} />

            <div style={{ position: 'relative', marginBottom: '40px' }}>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.5, type: "spring" }}
                    style={{
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        overflow: 'hidden',
                        border: '4px solid white',
                        boxShadow: '0 0 30px rgba(74, 144, 226, 0.3)', // Soft blue glow
                        margin: '0 auto'
                    }}
                >
                    <img
                        src={promise}
                        alt="Shalini"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                </motion.div>

                {/* Decoration halo */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute',
                        top: '-10px', left: '-10px', right: '-10px', bottom: '-10px',
                        borderRadius: '50%',
                        border: '1px dashed rgba(212, 175, 55, 0.5)',
                        pointerEvents: 'none'
                    }}
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1.5 }}
            >
                <p style={{
                    fontFamily: 'var(--font-quote)',
                    fontSize: '1.4rem',
                    color: '#333',
                    marginBottom: '15px',
                    fontStyle: 'italic'
                }}>
                    "Whatever happens in life, wherever you go,<br />
                    Shalini is always there for you, anna."
                </p>

                <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1.2rem',
                    color: '#666',
                    marginTop: '20px'
                }}>
                    Eppovumey… today, tomorrow, and forever. ❤️
                </p>
            </motion.div>
        </motion.div>
    );
};

export default FinalPromise;
